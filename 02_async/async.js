const getUserData = (userId) => new Promise((rs, rj) => {
  if (userId > 10) {
    setTimeout(() => { rs({ name: 'jeck' }); }, 1000);
  } else {
    rj(new Error('not found'));
  }
});

module.exports = getUserData;