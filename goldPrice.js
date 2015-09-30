/*
This module focuses on specific calulations that surround gold buying for
bullion purposes and does not refelct pricing based on jewelry.

goldPrice will also require an input from the API that dertermines current market
value of Gold today.

Gold is returned to the user as a market range.
*/
 var gold = {
     gramPrice: function(ozPrice){
         return (ozPrice * 100) / 3110; //31.1g/Troy Oz * 100 to account for accuracy in JS
        };,
    goldValue: function(gramPrice, weight, karatValue){
         if(dealType == undefined){
             return gramPrice * weight * karatValue/100;
         }else if(dealType == 'pawn'){
             return gramPrice * weight * karatValue/100;
         }else if(dealType == 'sale'){
             return gramPrice * weight * karatValue/100;
         }
         //note future funcationality to determine variation in pricing based on dealType
        };,
    karatValue: function(karat){
         var k;
         switch(karat){
             case 9: k = 375
                break;
             case 375: k = 375
                break;
             case 10: k = 417
                break;
             case 417: k = 417
                break;
             case 14: k = 585
                break;
             case 585: k = 585
                break;
             case 15: k = 625
                break;
             case 625: k = 625
                break;
             case 18: k = 750
                break;
             case 750: k = 750
                break;
             case 20: k = 834
                break;
             case 834: k = 834
                break;
             case 22: k = 916
                break;
             case 916: k = 916
                break;
             case 24: k = 999
                break;
             case 999: k = 999
                break;
         }
         return k;
     };,
};
