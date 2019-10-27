const R = require('ramda');
const FastText = require('fasttext.js');
const { ROOT_DIR } = require('./config');

const predict = async (sentence) => {
  const fastText = new FastText({
    loadModel: `${ROOT_DIR}/mlModel/twitter_model.bin`,
  });
  await fastText.load();
  const labels = await fastText.predict(sentence);
  fastText.unload();
  return labels;
};

const predictPositive = async ({ sentence, threshold = 0.5 }) => {
  const labels = await predict(sentence);
  const positiveLabel = R.find(R.propEq('label', '1'))(labels);
  const negativeLabel = R.find(R.propEq('label', '0'))(labels);
  return Number(positiveLabel.score) > Number(negativeLabel.score);
};

module.exports = {
  predict,
  predictPositive,
};
