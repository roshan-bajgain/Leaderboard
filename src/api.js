const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wMP3RWMQEh4QdJl7qy8R/scores/';

async function getScores (){
    const response = await fetch(url);
    const data = await response.json();
    return data.result;
}


