import { calculateCircleArea, calculateCirclePerimeter } from './shapes/circle.js';
import { calculateRectangleArea, calculateRectanglePerimeter } from './shapes/rectangle.js';
import { calculateSquareArea, calculateSquarePerimeter } from './shapes/square.js';
import { calculateTriangleArea, calculateTrianglePerimeter } from './shapes/triangle.js';

// export function calculateCircle() {
window.calculateCircle = function() {
    const radius = document.getElementById('circle-radius').value;
    const area = calculateCircleArea(radius);
    const perimeter = calculateCirclePerimeter(radius);
    document.getElementById('circle-output').innerHTML = `
        <p>Area: ${area}</p>
        <p>Perimeter: ${perimeter}</p>
    `;
}

// export function calculateRectangle() {
window.calculateRectangle = function() {
    const length = document.getElementById('rectangle-length').value;
    const width = document.getElementById('rectangle-width').value;
    const area = calculateRectangleArea(length, width);
    const perimeter = calculateRectanglePerimeter(length, width);
    document.getElementById('rectangle-output').innerHTML = `
        <p>Area: ${area}</p>
        <p>Perimeter: ${perimeter}</p>
    `;
}

// export function calculateSquare() {
window.calculateSquare = function() {
    const side = document.getElementById('square-side').value;
    const area = calculateSquareArea(side);
    const perimeter = calculateSquarePerimeter(side);
    document.getElementById('square-output').innerHTML = `
        <p>Area: ${area}</p>
        <p>Perimeter: ${perimeter}</p>
    `;
}

// export function calculateTriangle() {
window.calculateTriangle = function() {
    const base = document.getElementById('triangle-base').value;
    const height = document.getElementById('triangle-height').value;
    const side1 = document.getElementById('triangle-side1').value;
    const side2 = document.getElementById('triangle-side2').value;
    const side3 = document.getElementById('triangle-side3').value;
    const area = calculateTriangleArea(base, height);
    const perimeter = calculateTrianglePerimeter(side1, side2, side3);
    document.getElementById('triangle-output').innerHTML = `
        <p>Area: ${area}</p>
        <p>Perimeter: ${perimeter}</p>
    `;
}
