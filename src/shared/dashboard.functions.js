import {storage} from '@core/utils';

function toHTML(key) {
  const model = storage(key);
  const id = key.split(':')[1];

  return `
    <li class="db__record">
      <a href="#excel/${id}">${model.title}</a>
      <strong>
        ${new Date(model.openedDate).toLocaleDateString()}
        ${new Date(model.openedDate).toLocaleTimeString()}
      </strong>
    </li>
  `;
}

function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (!key.includes('excel')) {
      continue;
    }

    keys.push(key);
  }

  return keys;
}

export function createSpreadsheetsList() {
  const keys = getAllKeys();

  if (!keys.length) {
    return `<p>no tables created</p>`;
  }

  return `
    <div class="db__list-header">
      <span>Spreadsheet</span>
      <span>Last opened by me</span>
    </div>

    <ul class="db__list">
      ${keys.map(toHTML).join('')}
    </ul>
  `;
}
