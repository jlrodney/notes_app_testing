(function(exports) {
  this.note = ''

  function noteObject(string) {
    this.note = string
    return this.note;
  };

  exports.noteObject = noteObject;
})(this);

// console.log(noteObject("My fave language is Javascript"));
