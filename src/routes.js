const express = require('express');
const BUYORDER = require('./components/BUYORDER.js');
const { KEY, SECRET } = require('../api.export.js');
const Spot = require('./binance_Adaptor/spot.js')

const router = express.Router();


const client = new Spot(
  KEY,
  SECRET,
  {baseURL: 'https://api.binance.com/api'}
);

const order = new BUYORDER(client);

router.get('/buy/:symbol/:amount', (req, res) => {
    order.buy(req.params.symbol, req.params.amount);
    res.status(200).json({
      SECRET: SECRET,
      KEY: KEY, 
      SYMBOL: req.params.symbol, 
      AMOUNT: req.params.amount
    });
});

router.get('/sell/:symbol/:amount', (req, res) => {
  res.status(200).json({
    "symbol": req.params.symbol,
    "amount": req.params.amount

  });
});

module.exports = router;
