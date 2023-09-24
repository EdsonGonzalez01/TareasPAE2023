const axios = require('axios');

async function getNews(keyword) {
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${process.env.APIKEY}`
            }
        };
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${keyword}`, config);
        const articles = response.data.articles;
        return articles;
    } 
    catch (error) {
        throw error;
    }
}

module.exports = {
    getNews
};