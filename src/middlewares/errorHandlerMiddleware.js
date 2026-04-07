const { extractErrorMessages } = require('../utils/errorHelpers');

module.exports = (err, req, res, next) => {
    //res.redirect('/404');
    const errorMessages = extractErrorMessages(err);

    res.render('404', { errorMessages });
}