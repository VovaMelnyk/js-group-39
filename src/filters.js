const LOCALSTORAGE_KEY = 'selectedFilters';
const filterForm = document.querySelector('.filter-form');

initForm();

filterForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(filterForm);
  formData.forEach((value, name) => console.log(value, name));
});

filterForm.addEventListener('change', evt => {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
  persistedFilters[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters));
});

filterForm.addEventListener('reset', () => {
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

function initForm() {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      filterForm.elements[name].value = value;
    });
  }
}
