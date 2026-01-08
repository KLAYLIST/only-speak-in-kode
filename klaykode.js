const klayEncodeMap = {
  A: "@",
  B: "/",
  C: "+",
  D: "$",
  E: "3",
  F: "&",
  G: "*",
  H: "(",
  I: "8",
  J: ")",
  K: "'",
  L: "\"",
  M: ":",
  N: ";",
  O: "9",
  P: "0",
  Q: "1",
  R: "4",
  S: "#",
  T: "5",
  U: "7",
  V: "=",
  W: "Z",
  X: "-",
  Y: "6",
  Z: "%"
};

const klayDecodeMap = Object.fromEntries(
  Object.entries(klayEncodeMap).map(([key, value]) => [value, key])
);

function encodeKLAY(text) {
  return text
    .toUpperCase()
    .split("")
    .map(char => klayEncodeMap[char] ?? char)
    .join("");
}

function decodeKLAY(code) {
  return code
    .split("")
    .map(char => klayDecodeMap[char] ?? char)
    .join("");
}