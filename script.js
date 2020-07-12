const { SentimentAnalyzer } = require('node-nlp');

const sentiment = new SentimentAnalyzer({ language: 'en' });
sentiment
    .getSentiment('I like cats')
    .then(result => console.log(result));
// { score: 0.313,
//   numWords: 3,
//   numHits: 1,
//   comparative: 0.10433333333333333,
//   type: 'senticon',
//   language: 'en' }

sentiment
    .getSentiment('cats are stupid')
    .then(result => console.log(result));
// { score: -0.458,
//   numWords: 3,
//   numHits: 1,
//   comparative: -0.15266666666666667,
//   type: 'senticon',
//   language: 'en' }
