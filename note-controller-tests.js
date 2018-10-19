describe("note controller", function() {
  it('should show content of note on click', function() {
    var testController = new NoteController();
    var assert = new Assert();
    testController.insertNoteIntoHTML();
    testController.launch();
    makeUrlChangeShowAnimalForCurrentPage();
      document
        // .getElementById("app")
        .getElementById("note-link-0")
        .click()
      setTimeout(function() {
        // console.log(document.getElementById("note-link-0").innerHTML)
        // console.log("hello");
        assert.isTrue(document.getElementById("note-link-0").innerHTML === "Favourite drink")
        }, 2000);
    // console.log(document.getElementById("note-link-0").innerHTML)
  })
})

//
// function testNotecontrollerinst () {
//   var assert = new Assert()
//   function MockNoteList() {}
//   MockNoteList.prototype.createNote = function (text) {
//   }
//   var mockylist = new MockNoteList();
//
//   function MockNoteListView(list) {
//   }
//   var mockyview = new MockNoteListView(mockylist);
//   var noteController = new NoteController(mockylist);
//   assert.isTrue(noteController.noteListy === mockylist);
//   // assert.isTrue(noteController.notesListView === mockyview);
// };
//
// testNotecontrollerinst();
//
// function testNCInsertnote () {
//   var assert = new Assert()
//   function MockNoteList() {}
//   MockNoteList.prototype.createNote = function (text) {
//   }
//   var mockylist = new MockNoteList();
//
//   function MockNoteListView(list) {
//   }
//   MockNoteListView.prototype.htmlReturn = function() {
//     return "<ul><li><div>Favourite food: pesto</div></li></ul>"
//   }
//
//   var mockyview = new MockNoteListView(mockylist);
//   var noteController = new NoteController(mockylist, MockNoteListView);
//
//   window.onload = function() {
//     noteController.insertNoteIntoHTML()
//     var element = document.getElementById('app')
//     assert.isTrue( "<ul><li><div>Favourite food: pesto</div></li></ul>" === element.innerHTML)
//   }
// }
//
// testNCInsertnote();
