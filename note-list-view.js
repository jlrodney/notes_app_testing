(function(exports) {
  function NotesListView(view) {
    this.view = view
  }

  NotesListView.prototype.htmlReturn = function () {
    var text = "<ul>"
    for (var i = 0; i < this.view.viewNotes().length; i++) {
      text += "<li>" + `<a id="note-link-${i}"  href="#${this.view.viewNotes()[i].id}">` +this.view.viewNotes()[i].note.substring(0,20) + "</li>"
    }
    text += "</ul>"
    return text
  };

  exports.NotesListView = NotesListView;
})(this);
