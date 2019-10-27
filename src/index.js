const { predict } = require('./predict');

const index = async () => {
  const sample = 'life is good';
  const labels = await predict(sample);
  console.log('labels', labels);
};

index();
