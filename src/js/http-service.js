import axios from 'axios';

axios.defaults.baseURL = 'https://611560228f38520017a38499.mockapi.io/api/v1';

const getContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

const getContactById = async id => {
  const res = await axios.get(`/contacts/${id}`);
  return res.data;
};

const createContact = async contact => {
  const res = await axios.post(`/contacts`, contact);
  return res.data;
};

const deleteContact = async id => {
  const res = await axios.delete(`/contacts/${id}`);
  return res.data;
};

const updateContact = async (id, update) => {
  const res = await axios.put(`/contacts/${id}`, update);
  return res.data;
};

export default {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact,
};
