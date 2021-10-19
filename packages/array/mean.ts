const remove = <T>(arr1: T[], arr2: T[]): T[] => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new Error("expected both arguments to be arrays");
  }
  var result = [];
  var len = arr1.length;
  for (var i = 0; i < len; i++) {
    var elem = arr1[i];
    if (arr2.indexOf(elem) == -1) {
      result.push(elem);
    }
  }
  return result;
};

export default remove;
