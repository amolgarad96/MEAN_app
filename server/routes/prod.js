const express = require('express');
const router = express.Router();


const {getBatches, getList} = require('../controllers/prod')

router.route('/Batch').get(getBatches);
router.route('/List').get(getList);

module.exports = router;