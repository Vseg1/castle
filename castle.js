var jquery = require('jquery');
var cheerio = require('cheerio');
var request = require('request');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var url = 'https://www.relaischateaux.com/fr/site-map/etablissements';

var CastleSchema = new Schema({
    'restaurant': {type : String},
    'chef': {type : String},
    'hote': {type : String},
    'prix' : {type : Number}
  });

module.exports = castle = mongoose.model('castle', CastleSchema);

request(url, function(err, resp, body) {
    var $ = cheerio.load(body);
    

    $("#countryF").each(function(i){
        console.log('pays : ', $(this).find("h3").text());
        console.log("iteration - ", i);

        if ($(this).find("h3").text() === 'France'){
            console.log("ok france");

            $(this).find("li").each(function(j){

                console.log('restaurant numéro ', j);
                //k-ieme restaurant
                console.log($(this).filter("a").text());

                $(this).find("a").each(function(k){

                    if(k==0){
                        console.log($(this).filter("a").text());
                        //nom du restaurant

                        console.log($(this).attr("href"));
                        //url restaurant
                    }
                    if(k==1){
                        console.log($(this).attr("href"));
                        //url du chef
                    }
                    if(k==2){
                        console.log($(this).attr("href"));
                        //url de l'hote
                    }
                })
            })
        }
    })
});
