function testNoteString() {
  var noteobject = new noteObject("hello");
  stringChecker.isTrue(noteobject.note === "hello" );
};

testNoteString();

function testNoteList() {
  var notelist = new noteList
  var noteobject = new noteObject("hello")
  var noteObject1 = new noteObject("goodbye")
  arrayChecker.isTrue(notelist.list == [noteobject, noteObject1])
}

function testNoteListArray() {
  var notelist = new noteList
  var noteobject = new noteObject("hello")
  var noteObject1 = new noteObject("goodbye")

}
