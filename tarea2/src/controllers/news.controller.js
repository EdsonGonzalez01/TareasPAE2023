const model = require('./../model/new')

module.exports = {
    list: async (req, res) => {
        try {
            const keyword = req.query.q;
            if (!keyword) {
                const errorMessage = 'Please enter a keyword';
                res.render('error', { errorMessage });
            }
            else{
                const news = await model.getNews(keyword);
                res.render('news', {
                    title: `Latest news related to: ${keyword}`,
                    keyword: `${keyword}`,
                    news: news
                })
            }
        } 
        catch (error) {
            const errorMessage = `An error ocured: ${error}`;
            res.render('error', { errorMessage });
        }
    }
}