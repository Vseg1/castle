const castle = require('castle');

const restaurant;



const hotels = castle.getHotels();
const prices = castle.getPrices(restaurant);

const michelin = require('michelin');

const starred = michelin.get();