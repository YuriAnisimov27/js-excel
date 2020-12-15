function toHTML() {
  return `
    <li class="db__record">
      <a href="#">Таблица номер 1</a>
      <strong>12.06.2020</strong>
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
  console.log('keys', keys);

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
