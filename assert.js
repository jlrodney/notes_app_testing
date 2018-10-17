var stringChecker = {
  isTrue: function(stringChecker) {
    if (!stringChecker) {
      throw new Error("Needs to be a string");
    } else {
      console.log("%c Those strings mathced, well done! That was not too hard", "color:green")
    }
  }
};

var describe = function(message, callback) {
      document.write(message +"</span></br>" );
      callback();
},

isSame: function(item, item2) {
   if (item !== item2) {
     throw new Error("THAT IS NOT THE SAME!!!");
   } else {
     return true;
   }
 },

var instanceChecker = {
  isTrue: function(instanceChecker) {
    if (!instanceChecker) {
      throw new Error("Needs to be an instance");
    } else {
      console.log("%c It was an instance of ... well done! That was not too hard", "color:green")
    }
  }
};

(function(exports) {
  function Assert(){

  }

    Assert.prototype.expect = function(storedValue) {
      this.storedValue = storedValue;
      return this.storedValue;
    };
    Assert.prototype.toEqual = function(solution) {
      if (solution !== this.storedValue) {
        throw new Error("Hey! They do not equal each other");
      } else {
        console.log("%c They equal, well done! That was not too hard", "color:green")
      };
    };

    Assert.prototype.isTrue = function (assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
  };
};

  exports.Assert = Assert;
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

(function(exports) {
  function isArray(array) {
  if(!typeof array === typeof []) {
    throw new Error('That was not an array :(')
  }
  console.log('%c That was an array, well done! That was not too hard', "color:green")
};
exports.isArray = isArray;
})(this);
