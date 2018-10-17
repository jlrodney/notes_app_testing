(function(exports) {

  function testListView() {
    var assert = new Assert
    var noteListy = new noteList();
    var notesListView = new NotesListView(noteListy);
    instanceChecker.isTrue(notesListView.view instanceof noteList);
    }

  function testHTMLReturn() {
    var notelist = new noteList();
    var assert = new Assert
    notelist.createNote('Jamie')
    notelist.createNote('Rodney')
    var notesListView = new NotesListView(notelist);
    assert.expect(notesListView.htmlReturn());
    assert.toEqual("<ul><li>Jamie</li><li>Rodney</li></ul>")
  }

  testListView();
  testHTMLReturn();
})(this);
