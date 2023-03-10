const skills = [
  {skill: 'HTML', level: '3', description: 'I have adequate proficiently using this skill in a variety of applications.'},
  {skill: 'CSS', level: '3', description: 'I have adequate proficiently using this skill in a variety of applications.'},
  {skill: 'CSS Bootstrap', level: '1', description: 'I have limited experience with this skill at this point.'},
  {skill: 'JavaScript', level: '3', description: 'I have adequate proficiently using this skill in a variety of applications.'},
  {skill: 'MongoDB', level: '1', description: 'I have limited experience with this skill at this point.'},
  {skill: 'Mongoose', level: '2', description: 'I have moderate experience with this skill.'},
  {skill: 'Express.js', level: '2', description: 'I have moderate experience with this skill.'},
  {skill: 'React', level: '0', description: 'I have not begun my studies of this skill yet.'},
  {skill: 'Node.js', level: '1', description: 'I have limited experience with this skill at this point.'},
  {skill: 'Python', level: '0', description: 'I have not begun my studies of this skill yet.'},
  {skill: 'Django', level: '0', description: 'I have not begun my studies of this skill yet.'},
  {skill: 'PostgreSQL', level: '0', description: 'I have not begun my studies of this skill yet.'},
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'My Amazing Developer Skills', 
    date: req.date
  });
});


module.exports = router;
