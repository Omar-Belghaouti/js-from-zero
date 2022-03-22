function clamp(min, max, val) {
  return Math.min(Math.max(min, +val), max);
}
console.log(clamp(-10, 10, "4.30")); // 4.3
console.log(clamp(-10, 10, -8)); // -8
console.log(clamp(-10, 10, 12)); // 10
console.log(clamp(-10, 10, -15)); // -10
