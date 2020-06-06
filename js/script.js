'use strict';
//定数の宣言  ----------------------------------------------------------
const submit = document.getElementById('submit');
const app = document.getElementById('app');
const ul = document.querySelector('#ul');
const form = document.getElementById('form');
const menuItems = document.querySelectorAll('nav div');
const contents = document.querySelectorAll('.content');
// const search = document.querySelector('#searchF');

//即時関数（基本動作）  ----------------------------------------------------------
(function () {
  for (var key in localStorage) {
    var bookmark = localStorage.getItem(key);
    if (bookmark) {
      ul.innerHTML += localStorage.getItem(key);
    }
  }
})();

//ブックマークの保存  ----------------------------------------------------------
const saveLocalStorage = (site, bookmark) => {
  if (bookmark) {
    localStorage.setItem(site, bookmark);
    return;
  }
  return;
}


//ブックマークの追加  ----------------------------------------------------------
const addBookMark = (site, link, text) => {
  const bookmark = `<li>
  <dl>
  <dt>
  <a href="${link}" target="_blank">${site}</a>
  </dt>
  <dd>${text}</dd>
  </dl>
  <span class="delete"></span>
  </li>
  `;
  ul.innerHTML += bookmark;
  saveLocalStorage(site, bookmark);
}

//ブックマークの削除  ----------------------------------------------------------
const deleteBookMark = site => {
  localStorage.removeItem(site);
  return;
}

//削除ボタン（x画像）  ----------------------------------------------------------
ul.addEventListener('click', e => {
  console.log(e.target);
  console.log(e.target.querySelector('li'));
  console.log(e.target.parentElement.querySelector('dl dt a'));
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
//    const site = e.target.parentElement.firstElementChild.firstElementChild.firstElementChild.textContent.trim();
    const site = e.target.parentElement.querySelector('dl dt a').textContent.trim();
    deleteBookMark(site);
  }
});

//登録ボタン  ----------------------------------------------------------
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

/*
//検索機能  ----------------------------------------------------------
const filterBookMark = (site, bookmark) => {
  Array.form(ul.children)
    //フィルター条件
    .filter((mark) => !mark.textContent.toLowerCase().includes(site, bookmark))
    .forEach((mark) => mark.classList.add('filtered'));

  Array.form(ul.children)
    //フィルター条件
    .filter((mark) => mark.textContent.toLowerCase().includes(site, bookmark))
    .forEach((mark) => mark.classList.add('filtered'));
};
*/

//SPA風の画面遷移  ----------------------------------------------------------
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


