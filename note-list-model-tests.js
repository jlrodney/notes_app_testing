(function(exports){

  function testNoteListisArray() {
    var notelist = new noteList()
    notelist.addNote("hello")
    notelist.addNote("goodbye")
    isArray(notelist.list)
  }

  function testList() {
    var noteListy = new noteList();
    instanceChecker.isTrue(noteListy.list[0] === undefined && Array.isArray(noteListy.list))
  }

  function testaddNote() {
    var assert = new Assert()
    var noteListy = new noteList;
    // var note = new noteObject("hello");
    noteListy.addNote("hello")
    assert.isTrue(noteListy.list.includes("hello"))
  }

  function testviewNotes() {
    var assert = new Assert()
    var noteListy = new noteList();
    var note = new noteObject('hello');
    noteListy.addNote(note)
    assert.isTrue(noteListy.viewNotes().includes(note))
  }

  function testview2Notes() {
    var assert = new Assert()
    var noteListy = new noteList();
    var note = new noteObject('hello');
    var note2 = new noteObject('goodbye');
    noteListy.addNote(note)
    noteListy.addNote(note2)
    assert.isTrue(noteListy.viewNotes().includes(note))
    assert.isTrue(noteListy.viewNotes().includes(note2))
  }


  function testcreateNote2() {
    var assert = new Assert()
    var noteListy = new noteList();
    noteListy.createNote('hello');
    // console.log(noteListy.list[0].note)
    assert.isTrue(noteListy.list[0].note === 'hello')
  }

  function testCreateNote() {
    var notelist = new noteList()
    var assert = new Assert()
    notelist.createNote("hello")
    notelist.createNote("goodbye")
    console.log(["hello", "goodbye"]);
    console.log([notelist.list[0].note, notelist.list[1].note])
    console.log([notelist.viewNotes()[0].note, notelist.viewNotes()[1].note])
    assert.isTrue([notelist.viewNotes()[0].note, notelist.viewNotes()[1].note] === ["hello", "goodbye"])
    // assert.expect([notelist.viewNotes()[0].note, notelist.viewNotes()[1].note]);
    // assert.toEqual(["hello", "goodbye"]);
  }
  testNoteListisArray();
  testList();
  testaddNote();
  testviewNotes();
  testview2Notes();
  testview2Notes();
  testcreateNote2();
// testCreateNote();
})(this);
