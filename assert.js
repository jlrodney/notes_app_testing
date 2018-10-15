var stringChecker = {
  isTrue: function(stringChecker) {
    if (!stringChecker) {
      throw new Error("Needs to be a string");
    } else {
      console.log("%c String Test passed!!!!", "color:green")
    }
  }
};

 (function(exports) {
   function isArray(array) {
   if(!typeof array === typeof []) {
     throw new Error('That was not an array :(')
   }
   console.log('%c That was an array, well done! That was not too hard', "color:green")
 };
 exports.isArray = isArray;
})(this);

(function(exports) {
  function isString(string) {
  if(!typeof string === typeof '' || !typeof string === typeof "") {
    throw new Error('That was not a string :(')
  }
  console.log("%c That was a string, well done! That was not too hard", "color:green")
};
exports.isString = isString;
})(this);
