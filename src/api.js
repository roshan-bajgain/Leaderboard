const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZEoMrXoh5m9v2eGfRuDI/scores/';

const getScores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};

const addScore = async (obj) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  return data.result;
};

module.exports = { getScores, addScore };