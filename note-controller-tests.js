function testNotecontrollerinst () {
  var assert = new Assert()
  function MockNoteList() {}
  MockNoteList.prototype.createNote = function (text) {
    console.log("hello")
  }
  var mockylist = new MockNoteList();

  function MockNoteListView(list) {
    console.log("mocknotelistview")
  }
  var mockyview = new MockNoteListView(mockylist);
  var noteController = new NoteController(mockylist);
  assert.isTrue(noteController.noteListy === mockylist);
  // assert.isTrue(noteController.notesListView === mockyview);
};

testNotecontrollerinst();

function testNCInsertnote () {
  var assert = new Assert()
  function MockNoteList() {}
  MockNoteList.prototype.createNote = function (text) {
    console.log("hello")
  }
  var mockylist = new MockNoteList();

  function MockNoteListView(list) {
    console.log("mocknotelistview")
  }
  MockNoteListView.prototype.htmlReturn = function() {
    return "<ul><li><div>Favourite food: pesto</div></li></ul>"
  }

  var mockyview = new MockNoteListView(mockylist);
  var noteController = new NoteController(mockylist, MockNoteListView);

  window.onload = function() {
    noteController.insertNoteIntoHTML()
    var element = document.getElementById('app')
    assert.isTrue( "<ul><li><div>Favourite food: pesto</div></li></ul>" === element.innerHTML)
  }
}

testNCInsertnote();
