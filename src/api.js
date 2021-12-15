const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wMP3RWMQEh4QdJl7qy8R/scores/';

getScores = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
}

addScore(obj)= async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  const data = await response.json();
  return data.result;
}

module.exports = { getScores, addScore };