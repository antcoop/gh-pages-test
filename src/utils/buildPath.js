const buildPath = function (path) {
  return process.env.PUBLIC_URL + path;
}

export default buildPath;