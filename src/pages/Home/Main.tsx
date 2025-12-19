import * as React from "react";

interface MainProps {
  propName: string;
}

const Main: React.FC<MainProps> = ({ propName }) => {
  return <div>{propName}</div>;
};

export default Main;
