/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/


const getSize = (w, h, d) => [2*w*h + 2*d*h + 2*d*w, w*h*d];