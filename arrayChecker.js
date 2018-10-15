var arrayChecker = {
  isTrue: function(arrayChecker) {
    if (!arrayChecker) {
      throw new Error("Needs to be an array");
    } else {
      console.log("%c String Test passed!!!!", "color:green")
    }
  }
};
