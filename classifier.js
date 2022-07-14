/*const cohere = require('cohere-ai');
const apiKey = 'iwXeHXJjhh5VyRlbj7i7hE2KxvrOz5l9SqMZZ8yM';

cohere.init(apiKey);
(async () => {
  const response = await cohere.classify('medium', {
    taskDescription: '',
    outputIndicator: '',
    inputs: ["This item was broken when it arrived", "This item broke after 3 weeks"],
    examples: [{"text": "The order came 5 days early", "label": "positive"}, {"text": "The item exceeded my expectations", "label": "positive"}, {"text": "I ordered more for my friends", "label": "positive"}, {"text": "I would buy this again", "label": "positive"}, {"text": "I would recommend this to others", "label": "positive"}, {"text": "The package was damaged", "label": "negative"}, {"text": "The order is 5 days late", "label": "negative"}, {"text": "The order was incorrect", "label": "negative"}, {"text": "I want to return my item", "label": "negative"}, {"text": "The item\'s material feels low quality", "label": "negative"}]
  });
  console.log(`The confidence levels of the labels are ${JSON.stringify(response.body.classifications)}`);
})();*/

/* curl --location --request POST 'https://api.cohere.ai/small/classify' \
  --header 'Authorization: BEARER {apiKey}' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "outputIndicator": "",
    "taskDescription": "",
    "inputs": ["This item was broken when it arrived", "This item broke after 3 weeks"],
    "examples": [{"text": "The order came 5 days early", "label": "positive"}, {"text": "The item exceeded my expectations", "label": "positive"}, {"text": "I ordered more for my friends", "label": "positive"}, {"text": "I would buy this again", "label": "positive"}, {"text": "I would recommend this to others", "label": "positive"}, {"text": "The package was damaged", "label": "negative"}, {"text": "The order is 5 days late", "label": "negative"}, {"text": "The order was incorrect", "label": "negative"}, {"text": "I want to return my item", "label": "negative"}, {"text": "The item'\''s material feels low quality", "label": "negative"}]
  }' */

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer iwXeHXJjhh5VyRlbj7i7hE2KxvrOz5l9SqMZZ8yM");
  
  var raw = JSON.stringify({
    "outputIndicator": "",
    "taskDescription": "",
    "inputs": [
      "This item was broken when it arrived",
      "This item broke after 3 weeks"
    ],
    "examples": [
      {
        "text": "The order came 5 days early",
        "label": "positive"
      },
      {
        "text": "The item exceeded my expectations",
        "label": "positive"
      },
      {
        "text": "I ordered more for my friends",
        "label": "positive"
      },
      {
        "text": "I would buy this again",
        "label": "positive"
      },
      {
        "text": "I would recommend this to others",
        "label": "positive"
      },
      {
        "text": "The package was damaged",
        "label": "negative"
      },
      {
        "text": "The order is 5 days late",
        "label": "negative"
      },
      {
        "text": "The order was incorrect",
        "label": "negative"
      },
      {
        "text": "I want to return my item",
        "label": "negative"
      },
      {
        "text": "The item's material feels low quality",
        "label": "negative"
      }
    ]
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
 /* fetch("https://api.cohere.ai/small/classify", requestOptions)

    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));*/
  async function getResults() {
    let response = await fetch("https://api.cohere.ai/small/classify", requestOptions);
    let data = await response.json();
    Logger.log(data);
  }
  getResults();
/*
  var coords_fetch_url = encodeURI('https://api.tomtom.com/search/2/search/' + countryName + '.json?minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=off&key=' + API_KEY);
  async function getCoordinates() {
    let response = await fetch(coords_fetch_url);
    let data = await response.json();
    let latitude = data.results[0]["position"]["lat"];

    let longitude = data.results[0]["position"]["lon"];

    setCountryLatitude(latitude)

    setCountryLongitude(longitude)
  }
  getCoordinates();
*/