import React, { useEffect, useState } from "react";

const Demo = () => {
  const lights = ["red", "orange", "green"];
  const [currentLight, setCurrentLight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight((prev) => (prev + 1) % lights.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const getColour = (index) => {
    return currentLight === index ? lights[index] : "gray";
  };

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        style={{
          backgroundColor: "black",
          height: "25rem",
          width: "12rem",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {lights.map((light, index) => {
          return (
            <div
              style={{
                height: "5rem",
                width: "5rem",
                backgroundColor: getColour(index),
                margin: "auto",
                borderRadius: "50%",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Demo;
