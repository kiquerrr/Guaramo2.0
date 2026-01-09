const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Guaramo 2.0',
    module: 'api',
    time: new Date().toISOString()
  });
});

module.exports = router;
