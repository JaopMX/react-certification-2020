function random(limit) {
  return Math.floor(Math.random() * limit);
}

function truncateStr(string) {
  return string?.substring(0, 500);
}

export { random, truncateStr };
