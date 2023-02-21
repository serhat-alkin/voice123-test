const { HttpError } = require('../httpError');

const errorHandler = (err, req, res, next) => {
  console.error('error : ', err);
  if (err instanceof HttpError) {
    return res.status(err.code).json({ message: err.message });
  }
  return res.status(500).json({ message: 'INTERNAL SERVER ERROR' });
};
module.exports = { errorHandler }