const axios = require('axios')

const API_URI = "https://api.tvmaze.com/search/shows?q="

const Search = async (req,res) => {
    const query = req.query.show;
    const data = await  axios.get(`${API_URI}+${query}`)
    return res.status(200).send(data.data)
}

module.exports = {Search}