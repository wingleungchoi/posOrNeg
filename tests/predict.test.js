const { predictPositive } = require('../src/predict');

describe('predictPositive', () => {
  it('returns true when input is a positive sentence', async () => {
    const result = await predictPositive({
      sentence: 'I like this tweet',
    });
    expect(result).toBe(true);
  });

  it('returns false when input is a negative sentence', async () => {
    const result = await predictPositive({
      sentence: 'I dislike this tweet',
    });
    expect(result).toBe(false);
  });
});
