import React, { useState, useRef, useEffect } from "react";
import { Camera, X, Package, Search } from "lucide-react";

export default function OpenFoodFactsScanner() {
  const [scanning, setScanning] = useState(false);
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const scanIntervalRef = useRef(null);

  const startCamera = async () => {
    try {
      setError("");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setScanning(true);
      startScanning();
    } catch (err) {
      setError(
        "Failed to access camera. Please ensure camera permissions are granted.",
      );
    }
  };

  const stopCamera = () => {
    if (scanIntervalRef.current) {
      clearInterval(scanIntervalRef.current);
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
    setScanning(false);
  };

  const startScanning = () => {
    scanIntervalRef.current = setInterval(() => {
      captureAndDecode();
    }, 500);
  };

  const captureAndDecode = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    try {
      // Using jsQR library via CDN
      if (window.jsQR) {
        const code = window.jsQR(
          imageData.data,
          imageData.width,
          imageData.height,
        );
        if (code) {
          stopCamera();
          await fetchProductData(code.data);
        }
      }
    } catch (err) {
      console.error("Error decoding:", err);
    }
  };

  const fetchProductData = async (barcode) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`,
      );
      const data = await response.json();

      if (data.status === 1) {
        setProductData(data.product);
      } else {
        setError("Product not found in OpenFoodFacts database");
      }
    } catch (err) {
      setError("Failed to fetch product data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load jsQR library
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jsQR/1.4.0/jsQR.min.js";
    document.head.appendChild(script);

    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              OpenFoodFacts Scanner
            </h1>
          </div>

          {!scanning && !productData && (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-6">
                Scan a product barcode or QR code to get nutrition information
              </p>
              <button
                onClick={startCamera}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto transition"
              >
                <Camera className="w-5 h-5" />
                Start Scanning
              </button>
            </div>
          )}

          {scanning && (
            <div className="relative">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full rounded-lg"
              />
              <canvas ref={canvasRef} className="hidden" />
              <button
                onClick={stopCamera}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 border-4 border-green-500 rounded-lg opacity-50"></div>
              </div>
            </div>
          )}

          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading product data...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {productData && (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-bold text-gray-800">
                  {productData.product_name || "Unknown Product"}
                </h2>
                <button
                  onClick={() => {
                    setProductData(null);
                    setError("");
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {productData.image_url && (
                <img
                  src={productData.image_url}
                  alt={productData.product_name}
                  className="w-full max-w-xs mx-auto rounded-lg"
                />
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Brand</p>
                  <p className="font-semibold">{productData.brands || "N/A"}</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Barcode</p>
                  <p className="font-semibold">{productData.code || "N/A"}</p>
                </div>
              </div>

              {productData.nutriments && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-3">
                    Nutrition (per 100g)
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      Energy: {productData.nutriments.energy_100g || "N/A"} kcal
                    </div>
                    <div>Fat: {productData.nutriments.fat_100g || "N/A"} g</div>
                    <div>
                      Carbs:{" "}
                      {productData.nutriments.carbohydrates_100g || "N/A"} g
                    </div>
                    <div>
                      Protein: {productData.nutriments.proteins_100g || "N/A"} g
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  setProductData(null);
                  startCamera();
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
              >
                Scan Another Product
              </button>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 text-sm text-gray-600">
          <p className="font-semibold mb-2">How to use:</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Click "Start Scanning" to activate your camera</li>
            <li>Point your camera at a product barcode or QR code</li>
            <li>The app will automatically detect and fetch product info</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
