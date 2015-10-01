/*
Silver scrap and bullion value calculation methods
interfaces with the main functionality for instances
when the client selects the silver radio button.

Mimicks the gold value functionality for the most part
and pulls from the Kitco API

*/
var silver = {

    gramPriceSilver: function(ozPrice){
        return (ozPrice * 100) / 3110; //31.1g/Troy Oz * 100 to account for accuracy in JS
       };,
    silverValue: function(gramPerPrice, weight, karatValue){
        if(dealType == undefined){
            return gramPerPrice * weight * karatValue/100;
        }else if(dealType == 'pawn'){
            return gramPerPrice * weight * karatValue/100;
        }else if(dealType == 'sale'){
            return gramPerPrice * weight * karatValue/100;
        }
        //note future funcationality to determine variation in pricing based on dealType
       };,
    karatValueSilver: function(karat){
            var k;
            switch(karat){
                case 800: k = 800
                   break;
                case 925: k = 925
                   break;
                case 999: k = 999
                   break;
            }
            return k;
        };,
};
