var Calories = require('./model').Calories;

module.exports = function (req, res) {
    Calories.find({ date: req.body.date }, function(err, calorie){
        res.render('profile', { title: 'Review calories page', calories: calorie, facebook: global.user });
    });
};
