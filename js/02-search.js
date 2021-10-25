const allStudents = [
  'Jayne Kuyper',
  'Tiesha Laine',
  'Lupe Olague',
  'Clarita Bellman',
  'Laura Munden',
  'Bertram Calvi',
  'Georgianna Sparr',
  'Carolann Seller',
  'Felicia Midgette',
  'Kasandra Bezio',
  'Elias Vanwyk',
  'Yu Mccool',
  'Kati Golub',
  'Pat Dalley',
  'Loreta Francis',
  'Beatris Larusso',
  'Corrin Vancleve',
  'Sofia Ressler',
  'Erlene Burke',
  'Breann Sande',
  'Samatha Sao',
  'Henry Say',
  'Monnie Bernhard',
  'Dia Culbert',
  'Sunny Disandro',
  'Mack Sen',
  'Jeremiah Astle',
  'Misha Ono',
  'Silas Aubry',
  'Kenya Longmore',
  'Mirta Brandenberger',
  'Eneida Overholt',
  'Marcelo Popejoy',
  'Serafina Irvin',
  'Leroy Tacey',
  'Brice Hedrick',
  'Elana Hoops',
  'Keena London',
  'Enriqueta Hein',
  'Valeria Turnbull',
  'Earlean Canchola',
  'Corinna Tousignant',
  'Sherry Rivera',
  'Chasity Janda',
  'Tamela Barlow',
  'Leandro Lonergan',
  'Karlene Breunig',
  'Winter Endicott',
  'Salena Nail',
  'Tanner Clapper',
];

const searchBox = document.querySelector('.search-box');
const studentList = document.querySelector('.student-list');

searchBox.addEventListener('input', _.debounce(onSearch, 300));

populateStudentList(allStudents);

function onSearch() {
  const filter = searchBox.value.toLowerCase();
  const visibleStudents = allStudents.filter(student =>
    student.toLowerCase().includes(filter)
  );
  populateStudentList(visibleStudents);
}

function populateStudentList(students) {
  const markup = students.map(student => `<li>${student}</li>`).join('');
  studentList.innerHTML = markup;
}
