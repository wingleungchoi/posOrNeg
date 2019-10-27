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

module.exports = {
  predict,
};
