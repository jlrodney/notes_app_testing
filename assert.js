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
   console.log('That was an array, well done! That was not too bad')
 }
