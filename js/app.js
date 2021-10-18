const resources = [
  { title: 'Some article', type: 'article', href: 'habr.com' },
  { title: 'Some video', type: 'video', href: 'vimeo.com' },
  { title: 'Some chart', type: 'chart', href: 'my-chart.com' },
  { title: 'Some pdf', type: 'pdf', href: 'my-doc.pdf' },
];

const container = document.querySelector('.resources');

const cardsMarkup = resources
  .map(({ title, type, href }) => {
    return `
      <a class="card" data-type="${type}" href="${href}" target="_blank">${title}</a>
    `;
  })
  .join('');

container.insertAdjacentHTML('beforeend', cardsMarkup);

container.addEventListener('click', e => {
  const resourceType = e.target.dataset.type;
  if (resourceType !== 'article') {
    e.preventDefault();
  }
  switch (resourceType) {
    case 'video':
      console.log('Open video player');
      break;

    case 'chart':
      console.log('Show chart');
      break;

    case 'pdf':
      console.log('Open pdf viewer');
      break;
  }
});
