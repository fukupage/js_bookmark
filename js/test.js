'use strict';
{
  const ul = document.querySelector('#ul');
  const li = document.createElement('li');
  li.textContent = 'ほげほげ';
  ul.appendChild(li);
  const node = ul.parentElement;
  console.log(node);
  const nodeEl = document.createElement('span');
  console.log(nodeEl);
  nodeEl.textContent = 'ほげほげほげ';
  node.appendChild(nodeEl);
  const pEl = li.previousElementSibling;
  console.log(pEl);
  const pElText = document.createElement('div');
  pElText.textContent = 'hugahugahuga';
  pEl.appendChild(pElText);
}
