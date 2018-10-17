(function(exports) {

  function noteObject(string) {
    this.note = string
  };

  noteObject.prototype.returnText = function () {
    return this.note
  }

  exports.noteObject = noteObject;
})(this);

// console.log(noteObject("My fave language is Javascript"));
