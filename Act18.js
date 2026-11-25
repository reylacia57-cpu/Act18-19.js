// Requirement 2: Arrow function 1
const doubleVal = (n) => n * 2;
// Requirement 2: Arrow function 2 & Requirement 3: Spread operator on arrays
const combineWithDefaults = (arr) => [...arr, 99, 100];

const original = [1, 2, 3];
// Requirement 1: Array using .map()
const mapped = original.map((n) => doubleVal(n));
const combined = combineWithDefaults(mapped);

console.log(combined);