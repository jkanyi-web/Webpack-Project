// eslint-disable-next-line
import _ from 'lodash';
import './styles/style.css';

const list = document.getElementById('list');

const toDos = [
  {
    description: 'Wash car',
    completed: false,
    index: 1,
  },

  {
    description: 'Complete Projects',
    completed: false,
    index: 2,
  },

  {
    description: 'Cook',
    completed: false,
    index: 3,
  },
];

list.innerHTML = `
  <article>
    <h2>Today's todo </h2>
    <iconify-icon icon="bx:refresh"></iconify-icon>
  </article>
  <hr>
  <form>
    <input type="text" id="new-todo" class="no-outline" placeholder="Add to your list">
    <button type="submit" id="add-todo" value><iconify-icon icon="uil:enter"></iconify-icon></button>
  </form>
  <hr>
`;

const tasks = toDos.sort((a, b) => a.index - b.index).map((task) => task.name);

tasks.forEach((toDo) => {
  const addItem = () => {
    const listItem = document.createElement('li');
    listItem.classList.add('task');
    listItem.innerHTML = ` 
      <input type="checkbox">
      <label>${toDo.description}</label>
      <iconify-icon icon="ph:dots-three-outline-vertical-fill" class="dots"></iconify-icon>
      <hr>  
    `;

    return list.append(listItem);
  };
  addItem();
});