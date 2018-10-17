
(function(exports) {
  function noteList() {
    this.list = []
  };

    noteList.prototype.addNote = function (aaa) {
      this.list.push(aaa)
  };

    noteList.prototype.createNote = function (aaa) {
      this.list.push(new noteObject(aaa))
    };

    noteList.prototype.viewNotes = function () {
      return this.list
  };



  exports.noteList = noteList;
})(this);
