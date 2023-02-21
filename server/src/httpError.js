
class HttpError extends Error {
  constructor(code = 500, message = 'INTERNAL SERVER ERROR') {
    super(message);
    this.code = code;
  }
}

module.exports = {
  HttpError,
}
