import cors from 'cors';

module.exports = function () {
  const corsOptions = {
    // credentials: true,
    origin: '*',
  };

  return cors(corsOptions);
};
