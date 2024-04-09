// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
// function to calculate area
function calculateCelsius() {
  // declaring variable for hours worked with value set as value inputed by user 
  let f = document.getElementById("f").value;

  // calculates result by multiplying the product of side a, side b, and height by 1/6
  let celsius = (f-32) * (5/9);
  document.getElementById("user-info").innerHTML = f + "° fahrenheit is equal to " + celsius.toFixed(0) + "°C";

  return celsius;
}
