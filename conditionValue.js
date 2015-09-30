/*
This method interperts from Pawndr's item conditon radio buttons
and returns a condition valuePercentage to help the program
determine the most accurate price based on the users self-
described state of the item.

Can be added via prototype to typeOfItem objects for better
accuracy with typeOfItem's methods.
*/

var conditionValue = function(number){
    var valuePercentage;
        switch(number){
        case 1: valuePercentage = 0.50
                break;
        case 2: valuePercentage = 0.60
                break;
        case 3: valuePercentage = 0.70
                break;
        case 4: valuePercentage = 0.70
                break;
        case 5: valuePercentage = 0.75
                break;
        case 6: valuePercentage = 0.80
                break;
        case 7: valuePercentage = 0.85
                break;
        case 8: valuePercentage = 0.90
                break;
        case 9: valuePercentage = 0.95
                break;
        case 10: valuePercentage = 1.00
                break;
        default: valuePercentage = 0.85
        }
    return valuePercentage;
    };
