const form = document.querySelector('.note-editor');
const notesContainer = document.querySelector('.notes');

form.addEventListener('submit', event => {
  event.preventDefault();
  createNote(form.elements.text.value);
  form.reset();
});

function createNote(text) {
  const noteEl = document.createElement('div');
  noteEl.classList.add('note');
  noteEl.textContent = text;
  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.textContent = 'Удалить';
  noteEl.append(delBtn);
  notesContainer.append(noteEl);
}
