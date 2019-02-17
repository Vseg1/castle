var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var url = 'https://www.relaischateaux.com/fr/site-map/etablissements';

var json = [];

/*var CastleSchema = new Schema({
    'restaurant': {type : String},
    'chef': {type : String},
    'hote': {type : String},
    'prix' : {type : Number}
  });*/

  console.log('castle ok');


request(url, function(err, resp, body) {
    var $ = cheerio.load(body);
    
    var nom_hotel;
    var url_chef;
    var url_hote;
    var url_restaurant;

    $("#countryF").each(function(i){
        //console.log('pays : ', $(this).find("h3").text());
        //console.log("iteration - ", i);

        if ($(this).find("h3").text() === 'France'){
            //console.log("ok france");

            $(this).find("li").each(function(j){

                //console.log('restaurant numéro ', j);
                //k-ieme restaurant
                //console.log($(this).filter("a").text());

                $(this).find("a").each(function(k){

                    if(k==0){
                        //console.log($(this).filter("a").text());
                        nom_hotel = $(this).filter("a").text().trim();
                        //nom du restaurant

                        //console.log($(this).attr("href"));
                        url_restaurant = $(this).attr("href").trim();
                        //url restaurant
                    }
                    if(k==1){
                        //console.log($(this).attr("href"));
                        url_chef = $(this).attr("href").trim();
                        //url du chef
                    }
                    if(k==2){
                        //console.log($(this).attr("href"));
                        url_hote = $(this).attr("href").trim();
                        //url de l'hote
                    }
                    json.push({name: nom_hotel, url:url_restaurant, chef :url_chef, hote: url_hote})
                })
                fs.writeFileSync("./castle.json",JSON.stringify(json));
            })
        }
    })
});

