const axios = require('axios');

const url = 'https://api.sandbox.voice123.com/providers/search/?service=voice_over'

const searchKeyword = async(keywords, page) => {
  return await axios.get(`${url}&keywords=${keywords}&page=${page}`);
}

module.exports = {
  searchKeyword,
};