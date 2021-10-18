const courses = [
  { name: 'HTML5 for beginners', tags: ['html'], price: 9.99 },
  { name: 'Advanced HTML5', tags: ['html'], price: 14.99 },
  { name: 'CSS3 pro tricks', tags: ['css'], price: 9.79 },
  { name: 'CSS animations form zero to hero', tags: ['css'], price: 12.39 },
  { name: 'Web page markup and styling', tags: ['html', 'css'], price: 6.79 },
  { name: 'JavaScript for kids', tags: ['js'], price: 7.49 },
  { name: 'JavaScript deep dive', tags: ['js'], price: 19.99 },
  { name: 'React state management', tags: ['js', 'react'], price: 14.19 },
  { name: 'Gentle React', tags: ['js', 'react'], price: 7.49 },
  { name: 'Tao of React', tags: ['js', 'react'], price: 29.99 },
  { name: 'Node.js for beginners', tags: ['js', 'nodejs'], price: 9.99 },
  { name: 'Node.js scaling strategies', tags: ['js', 'nodejs'], price: 16.39 },
];
const filters = [...new Set(courses.flatMap(course => course.tags))];
const filtersContainer = document.querySelector('.filters');
const coursesContainer = document.querySelector('.courses');
const selectedFilters = new Set([]);

filtersContainer.addEventListener('click', onSelectFilter);
renderFilters();
renderCourses(courses);

function renderFilters() {
  const markup = filters
    .map(
      filter =>
        `<button class="btn" type="button" data-value="${filter}">${filter}</button>`
    )
    .join('');
  filtersContainer.insertAdjacentHTML('beforeend', markup);
}

function onSelectFilter(event) {
  const nextFilterEl = event.target;
  const nextFilterValue = nextFilterEl.dataset.value;
  if (!nextFilterValue) return;

  const prevFilterEl = filtersContainer.querySelector('.is-selected');
  if (prevFilterEl) {
    prevFilterEl.classList.remove('is-selected');
  }
  if (nextFilterEl === prevFilterEl) {
    return renderCourses(courses);
  }
  nextFilterEl.classList.add('is-selected');
  renderCourses(getFilteredCourses(nextFilterValue));
}

function renderCourses(courses) {
  coursesContainer.innerHTML = '';
  const markup = courses
    .map(
      (course, idx) =>
        `<div>${idx + 1}. ${course.name} - ${course.price}$</div>`
    )
    .join('');
  coursesContainer.insertAdjacentHTML('beforeend', markup);
}

function getFilteredCourses(filter) {
  return courses.filter(course => course.tags.includes(filter));
}
