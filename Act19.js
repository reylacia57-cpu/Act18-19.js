// Requirement 3: Let variable 1
let scores = [40, 75, 80, 95];
// Requirement 3: Let variable 2
let bonus = [5, 12, 20, 2];

// Requirement 1: Array using .filter() (Array 1)
let passing = scores.filter((s) => s >= 75);
// Requirement 1: Array using .filter() (Array 2)
let highBonus = bonus.filter((b) => b >= 10);

// Requirement 2: Loop
for (let i = 0; i < passing.length; i++) {
  console.log(passing[i]);
}