import axios from 'axios';

axios.defaults.baseURL = 'https://611560228f38520017a38499.mockapi.io/api/v1';

const getContacts = () => {
  return axios.get(`/contacts`);
};

getContacts()
  .then(response => console.log(response.data))
  .catch(error => console.log('AAAAAAAAAAA'));

const getContactById = id => {
  return axios.get(`/contacts/${id}`);
};

// getContactById(4);
// getContactById(5);
// getContactById(6);

const createContact = contact => {
  return axios.post(`/contacts`, contact);
};

// createContact({ name: 'Mango', phone: '111-22-33', email: 'mango@mail.com' });
// createContact({ name: 'Poly', phone: '333-22-11', email: 'poly@mail.com' });

const deleteContact = id => {
  return axios.delete(`/contacts/${id}`);
};

// deleteContact(2);

const updateContact = (id, update) => {
  return axios.put(`/contacts/${id}`, update);
};

// updateContact(4, { email: 'hello@mail.com' });
