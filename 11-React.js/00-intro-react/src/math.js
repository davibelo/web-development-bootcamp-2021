const pi = 3.1415962;

// exporting default means that when you import
// it will be the default thing to be imported
export default pi;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export { doublePi, triplePi };
