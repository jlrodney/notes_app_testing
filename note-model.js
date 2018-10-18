(function(exports) {

  function noteObject(string, id) {
    this.note = string
    this.id = id
  };

  noteObject.prototype.returnText = function () {
    return this.note
  }

  exports.noteObject = noteObject;
})(this);

// console.log(noteObject("My fave language is Javascript"));
