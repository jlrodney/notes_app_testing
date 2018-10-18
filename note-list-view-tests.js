describe('Note list view', function(){
  it('is an instance of notelist', function(){
    var assert = new Assert
    var noteListy = new noteList();
    var notesListView = new NotesListView(noteListy);
    instanceChecker.isTrue(notesListView.view instanceof noteList);
  })

  // it('should have an associated link for each note', function() {
  //   var assert = new Assert();
  //   var notelist = new noteList();
  //   notelist.createNote('Pasta: eggs, flour, salt, butter, oiil')
  //   notelist.createNote('Tomato sauce: saucey sauce, sauce')
  //   var notesListView = new NotesListView(notelist);
  //   instanceChecker.isTrue(notelistView.view.viewNotes(). === 'http://localhost:8080#notes/0')
  // })

  it('prints the notes with a character limit of 20', function(){
    var assert = new Assert();
    var notelist = new noteList();
    notelist.createNote('Pasta: eggs, flour, salt, butter, oiil')
    notelist.createNote('Tomato sauce: saucey sauce, sauce')
    var notesListView = new NotesListView(notelist);
    bullets = "<ul><li>Pasta: eggs, flour, </li><li>Tomato sauce: saucey</li></ul>"
    assert.isTrue(notesListView.htmlReturn() === bullets)
  });

});
