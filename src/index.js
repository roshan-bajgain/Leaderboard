import './style.css';
import { getScores, addScore } from './api.js';

const btn = document.querySelector('.submit-btn');

async function render() {
    const array = await getScores();
    table(array);
}
render();

btn.addEventListener('click', async () => {
    const user = document.querySelector('#name').value;
    const score = Number(document.querySelector('#score').value);
    const obj = { user, score };
    addScore(obj);
  document.querySelector('#name').value = '';
  document.querySelector('#score').value = '';
});

document.querySelector('.btn-success').addEventListener('click', render);