import React from "react";
import ReactDOM from "react-dom";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}