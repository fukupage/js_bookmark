'use strict';
const submit = document.getElementById('submit');
const app = document.getElementById('app');
const ul = document.querySelector('ul');
const form = document.getElementById('form');
const menuItems = document.querySelectorAll('nav div');
const contents = document.querySelectorAll('.content');


(function () {
  for (var key in localStorage) {
    var bookmark = localStorage.getItem(key);
    if (bookmark) {
      ul.innerHTML += localStorage.getItem(key);
    }
  }
})();

const saveLocalStorage = (site, bookmark) => {
  if (bookmark) {
    localStorage.setItem(site, bookmark);
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
  const bookmark = `<li>
  <dl>
    <dt>
      <a href="${link}" target="_blank">${site}</a>
    </dt>
    <dd>${text}</dd>
  </dl>
  <span class="delete"><img src="img/close.svg" alt="閉じる"></span>
  </li>
    `;
  ul.innerHTML += bookmark;
  saveLocalStorage(site, bookmark);
}

ul.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
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
  } else {
    alert('必要情報を入れてください。');
  }
});

menuItems.forEach(clickedItem => {
  clickedItem.addEventListener('click', e => {
    e.preventDefault();
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    clickedItem.classList.add('active');

    contents.forEach(contents => {
      contents.classList.remove('active');
    });
    document.getElementById(clickedItem.dataset.id).classList.add('active');
  });
});

