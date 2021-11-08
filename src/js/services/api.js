export function fetchUser(login) {
  return fetch(`https://api.github.com/users/${login}`).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}
