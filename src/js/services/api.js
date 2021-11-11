const BASE_URL = 'https://611560228f38520017a38499.mockapi.io/api/v1';

let page = 1;
const pageSize = 25;
const totalComments = 100;
const totalPages = totalComments / pageSize;

function getComments() {
  return fetch(`${BASE_URL}/comments?page=${page}&limit=${pageSize}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw Error('Whoops');
    })
    .then(comments => {
      page += 1;
      return {
        comments,
        hasNextPage: page <= totalPages,
      };
    });
}

export default {
  getComments,
};
