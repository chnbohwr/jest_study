const getUserData = require('./async');

test('when get user id < 10 should error', async () => {
  expect.assertions(1)
  try {
    await getUserData(6)
  } catch (e) {
    expect(e).toBeInstanceOf(Error);
  }
});

test('when user id > 10 get success', async () => {
  expect.assertions(1);
  await expect(getUserData(11)).resolves.toBeInstanceOf(Object);
})