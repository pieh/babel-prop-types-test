!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("react"), require("prop-types")) : "function" == typeof define && define.amd ? define(["react", "prop-types"], t) : (e = e || self).babelPropTypesTest = t(e.React, e.PropTypes);
}(this, function (e, t) {
  e = e && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e, t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;

  var o = function (t) {
    return e.createElement("div", null, t.foo);
  };

  return o.propTypes = {
    foo: t.string
  }, o;
});