(function (exports) {
  function NoteController(noteListy = new noteList(), ViewClass = NotesListView) {
    this.noteListy = noteListy;
    this.noteListy.createNote("Favourite drink");
    this.noteListy.createNote("Well done Alex! We did it ! Wooohooo, let go get a drink");
    this.noteListy.createNote("Hello friends, welcome to this site");
    this.notesListView = new ViewClass(this.noteListy);
  }

  NoteController.prototype.insertNoteIntoHTML = function () {
    console.log(document.getElementById('app'))
    var element = document.getElementById('app')
    element.innerHTML = this.notesListView.htmlReturn();
  };

  // NoteController.prototype.clicky = function() {
  //   for (var i = 0; i < this.noteListy.list.length; i++) {
  //       document
  //         .querySelector(`.note-link-${i}`)
  //         .addEventListener("click", function(clickEvent) {
  //         clickEvent.preventDefault()
  //     })
  //   }
  // }

  NoteController.prototype.launch = function () {
    var notesListView = this.notesListView;
    var element = document.querySelector("#testing")
    element.innerHTML = notesListView.htmlReturn();
  }

  exports.NoteController = NoteController;

})(this);
controller = new NoteController();
controller.launch();

makeUrlChangeShowAnimalForCurrentPage = function () {
  window.addEventListener("hashchange", function() {
    window.onload = showNote
    showNote.call()
  });
};

showNote = function() {
  showNoteList(getNoteText(window.location));
};

getNoteText = function(location) {
  var a = location.hash.split("#")[1];
  return controller.noteListy.list[a].note
};

showNoteList = function(text) {
  document
    .getElementById("app")
    .innerHTML = text;
};

makeUrlChangeShowAnimalForCurrentPage();
