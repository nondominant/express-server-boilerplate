class BUYORDER { 
  constructor(client) {
    this.client = client
  }


  async buy(symbol, amount){
    this.client.newOrder(symbol, 'BUY', 'LIMIT', {
      price: '10',
      quantity: amount, 
      timeInForce: 'GTC'
    })
  }
}

module.exports = BUYORDER 

