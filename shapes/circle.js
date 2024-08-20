// shapes/circle.js
import { PI } from '../utils/constants.js';

export function calculateCircleArea(radius) {
    return PI * radius * radius;
}

export function calculateCirclePerimeter(radius) {
    return 2 * PI * radius;
}
