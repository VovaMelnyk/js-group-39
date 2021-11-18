import HTTPService from './http-service';

const contactList = document.querySelector('.contacts');

document.querySelector('button').addEventListener('click', async () => {
  try {
    const contacts = await HTTPService.getContacts();
    console.log(contacts);
    contactList.innerHTML = contacts
      .map(
        c =>
          `<div style="display: flex;">
            <p>${c.name}</p><button data-id="${c.id}">Delete</button>
          </div>`
      )
      .join('');
  } catch (error) {
    console.log(error);
  }
});

contactList.addEventListener('click', async e => {
  if (!e.target.dataset.id) return;
  try {
    await HTTPService.deleteContact(e.target.dataset.id);
    e.target.parentNode.remove();
  } catch (error) {
    console.log(error);
  }
});
