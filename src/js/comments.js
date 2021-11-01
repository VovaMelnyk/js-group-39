// import { format } from 'date-fns';
import comments from '../comments.json';

document.querySelector('.comments').innerHTML = prepareCommentsMarkup();

function prepareCommentsMarkup() {
  return comments
    .map(comment => {
      return `<div class="comment">
      <header>
        <b>Автор</b> posted
        <time datetime="">
          <i>Время</i>
        </time>
      </header>
      <p>Контент</p>
    </div>`;
    })
    .join('');
}
