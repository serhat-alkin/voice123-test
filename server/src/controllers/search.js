const { HttpError } = require('../httpError');
const SearchService = require('../services/search');
const search = async (req, res, next) => {
  try {
		if(!req.query.keywords || !req.query.page){
			throw new HttpError(400, 'Bad Request');
		}
    const result = await SearchService.searchKeyword(
      req.query.keywords, 
      req.query.page,
    );

    if (result?.length === 0) throw new HttpError(404, 'Record Not found');

    const response = {
      providers: result.data?.providers,
      "x-list-page-size" : result.headers["x-list-page-size"],
      "x-list-total-pages" : result.headers['x-list-total-pages'],
      "x-list-total-rows" : result.headers['x-list-total-rows'],
      "x-list-current-page" : result.headers['x-list-current-page'],
    }
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  search,
};