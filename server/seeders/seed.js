const db = require('../config/connection');
const { Jackets } = require('../models');
const jacketSeeds = require('./jacketSeeds.json');

db.once('open', async () => {
    try {
      await Jackets.deleteMany({});
      await Jackets.create(jacketSeeds);
  
      console.log('all done!');
      process.exit(0);
    } catch (err) {
      throw err;
    }
  });