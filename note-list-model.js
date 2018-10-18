
(function(exports) {
  function noteList() {
    this.list = []
    this.id = 0
  };

    noteList.prototype.addNote = function (aaa) {
      this.list.push(aaa)
  };

    noteList.prototype.createNote = function (aaa) {
      this.list.push(new noteObject(aaa, id = this.id))
      this.id++;
    };

    noteList.prototype.viewNotes = function () {
      return this.list
  };



  exports.noteList = noteList;
})(this);
