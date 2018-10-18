(function (exports) {
  function NoteController(noteListy = new noteList(), ViewClass = NotesListView) {
    this.noteListy = noteListy;
    this.noteListy.createNote("Favourite drink");
    this.noteListy.createNote("Favourite drink");
    this.notesListView = new ViewClass(this.noteListy);
  }

  NoteController.prototype.insertNoteIntoHTML = function () {
    console.log(document.getElementById('app'))
    var element = document.getElementById('app')
    element.innerHTML = this.notesListView.htmlReturn();
    // console.log(element)

  };
  exports.NoteController = NoteController;

})(this);
