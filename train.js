const FastText = require('fasttext.js');

const test = async () => {
  const fastTextToTest = new FastText({
    loadModel: './mlModel/twitter_model.bin',
    testFile: './dataset/tweets.valid',
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
    serializeTo: './mlModel/twitter_model',
    trainFile: './dataset/tweets.train',
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
