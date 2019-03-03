var fs = require('fs');
var castle = require('./castle.json');
var michelin = require('./michelin.json'); 
var result=[];

//console.log(castle);
//console.log(michelin);
	
	for(var i=0;i<castle.length;i++){
		for(var j=0; j<michelin.length; j++) {
			if(castle[i].name===michelin[j].name) {
				//console.log("egalite ok");
				//console.log(castle[i].name);
				//console.log(castle[i].url);
				//console.log(castle[i].chef);
				//console.log(castle[i].hote);
				result.push({"hotel Name ": castle[i].name, "url_restaurant ":castle[i].url,"url du chef ":castle[i].chef, "url de l'hote":castle[i].hote})
		}
	}
}

fs.writeFileSync("./my-app/src/compare.json",JSON.stringify(result));