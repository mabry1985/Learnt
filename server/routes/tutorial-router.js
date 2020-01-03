const express = require('express')

const TutorialCtrl = require('../controllers/tutorial-ctrl')

const router = express.Router()

router.post('/scrape-youtube', TutorialCtrl.scrapeTutorial)
router.post('/tutorial', TutorialCtrl.createTutorial)
router.put('/tutorial/:id', TutorialCtrl.updateTutorial)
router.delete('/tutorial/:id', TutorialCtrl.deleteTutorial)
router.get('/tutorial/:id', TutorialCtrl.getTutorialById)
router.get('/tutorials', TutorialCtrl.getTutorials)

module.exports = router