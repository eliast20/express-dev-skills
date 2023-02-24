// const express = require('express');
// // const router = express.Router();
// const skillsCtrl = require('../controllers/skills');

// router.get('/', skillsCtrl.index);
// router

// const express = require('express');
// // const router = express.Router();
// const skillsController = require('../controllers/skills');

// router.get('/', skillsController.index);
// router.get('/:id', skillsController.show);

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const Skill = require('../models/skill');

// // GET skills index
// router.get('/', (req, res, next) => {
//   res.render('index', { skills: Skill.getAll() });
// });

// // GET new skill form
// router.get('/new', (req, res, next) => {
//   res.render('new');
// });

// // GET skill detail
// router.get('/:id', (req, res, next) => {
//   const skill = Skill.getById(req.params.id);
//   if (!skill) return next(); // 404 Not Found
//   res.render('show', { skill });
// });

// // POST new skill
// router.post('/', (req, res, next) => {
//   const { name, description, logoUrl } = req.body;
//   const newSkill = new Skill(name, description, logoUrl);
//   Skill.add(newSkill);
//   res.redirect('/skills');
// });

// // DELETE skill
// router.delete('/:id', (req, res, next) => {
//   Skill.delete(req.params.id);
//   res.redirect('/skills');
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.get('/skills/:id/edit', skillsCtrl.edit);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.put('/:id', skillsCtrl.update);

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Skill = require('../models/skill');

// router.get('/', (req, res) => {
//   res.render('skills/index', { skills });
// });

// router.get('/:id', (req, res) => {
//   const skill = skills.find(skill => skill.id === parseInt(req.params.id));
//   res.render('skills/show', { skill });
// });

// module.exports = router;
