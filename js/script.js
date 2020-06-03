'use strict';
const submit = document.getElementById('submit');
const app = document.getElementById('app');
const ul = document.querySelector('ul');
const form = document.getElementById('form');

(function () {
  for (var key in localStorage) {
    var html = localStorage.getItem(key);
    if (html) {
      ul.innerHTML += localStorage.getItem(key);
      console.log(html);
      console.log(key);
    }
  }
})();

const saveLocalStorage = (site, html) => {
  if (html) {
    localStorage.setItem(site, html);
    console.log(html);
    console.log(site);
    return;
  }
  return;
}

const deleteBookMark = site => {
  localStorage.removeItem(site);
  console.log(site);
  return;
}

const addBookMark = (site, link, text) => {
  const html = `<li>
  <dl>
    <dt>
      <a href="${link}" target="_blank">${site}</a>
    </dt>
    <dd>${text}</dd>
  </dl>
  <span class="delete">[x]</span>
  </li>
    `;
  ul.innerHTML += html;
  saveLocalStorage(site, html);
}

ul.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    console.log(e.target);
    const site = e.target.parentElement.firstElementChild.firstElementChild.firstElementChild.textContent.trim();
    deleteBookMark(site);
  }
});


submit.addEventListener('click', e => {
  e.preventDefault();
  const site = form.site.value.trim();
  const link = form.link.value.trim();
  const text = form.text.value.trim();
  if (site !== '' && link !== '' && text !== '') {
    addBookMark(site, link, text);
    form.reset();
    console.log(site);
    console.log(link);
    console.log(text);

  } else {
    document.write('必要情報を入れてください。');
  }
});



