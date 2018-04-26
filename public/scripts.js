const btn = document.querySelector('button');
const list = document.querySelector('ul');

const addClick = () => {
  const li = document.createElement('li');
  li.innerText = 'You clicked the button!';
  list.appendChild(li);
}

btn.addEventListener('click', addClick);
