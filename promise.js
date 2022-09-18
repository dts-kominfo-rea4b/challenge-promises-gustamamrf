const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let THEATER_IXX = await promiseTheaterIXX();
  let THEATER_VGC = await promiseTheaterVGC();

  const jumlahEmosi = THEATER_IXX.filter((emosiTheaterIXX) => emosiTheaterIXX.hasil === emosi).length + THEATER_VGC.filter((emosiTheaterVGC) => emosiTheaterVGC.hasil === emosi).length;
  return jumlahEmosi;
};

module.exports = {
  promiseOutput,
};
