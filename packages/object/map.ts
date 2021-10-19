const map = (obj: Object, predicate) => {
  var result = {};
  var keys = Object.keys(obj);
  var len = keys.length;
  for (var i = 0; i < len; i++) {
    var key = keys[i];
    result[key] = predicate(key, obj[key]);
  }
  return result;
};

export default map;
