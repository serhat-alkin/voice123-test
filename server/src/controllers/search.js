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
    res.json(result.data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  search,
};