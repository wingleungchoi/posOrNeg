const FastText = require('fasttext.js');

const { ROOT_DIR } = require('./config');

const test = async () => {
  const fastTextToTest = new FastText({
    loadModel: `${ROOT_DIR}/mlModel/twitter_model.bin`,
    testFile: `${ROOT_DIR}/dataset/tweets.valid`,
  });
  try {
    const evaluation = await fastTextToTest.test();
    console.log('test done.', evaluation);
  } catch (error) {
    console.error(error);
  }
};

const train = async () => {
  const fastTextToTrain = new FastText({
    serializeTo: `${ROOT_DIR}/mlModel/twitter_model`,
    trainFile: `${ROOT_DIR}/dataset/tweets.train`,
  });
  try {
    await fastTextToTrain.train();
    console.log('train done.');
  } catch (error) {
    console.error(error);
  }
  await test();
};

train();
