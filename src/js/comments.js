import { formateDatetime } from './helpers/formateDatetime';
import comments from '../comments.json';

document.querySelector('.comments').innerHTML = prepareCommentsMarkup();

function prepareCommentsMarkup() {
  return comments
    .map(({ author, createdAt, content }) => {
      return `<div class="comment">
      <header>
        <b>${author}</b> posted
        <time datetime="">
          <i>${formateDatetime(createdAt)}</i>
        </time>
      </header>
      <p>${content}</p>
    </div>`;
    })
    .join('');
}
