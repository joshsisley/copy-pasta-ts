const has = (obj: Object, propsArg: any[] | string | symbol) => {
  if (!obj) {
    return false;
  }
  var props, prop;
  if (Array.isArray(propsArg)) {
    props = propsArg.slice(0);
  }
  if (typeof propsArg == "string") {
    props = propsArg.split(".");
  }
  if (typeof propsArg == "symbol") {
    props = [propsArg];
  }
  if (!Array.isArray(props)) {
    throw new Error("props arg must be an array, a string or a symbol");
  }

  while (props.length) {
    prop = props.shift();

    // if we are recursing, but met a nullish value, we cannot
    // access it via .hasOwnProperty and should return negatively
    if (obj == null) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
    if (props.length === 0) {
      return true;
    }

    obj = obj[prop];
  }

  return false;
};
