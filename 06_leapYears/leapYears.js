const leapYears = function(checkYear) {
    if (checkYear % 4 === 0 && !checkYear % 100 == 0) {
        if (checkYear % 100 == 0 && checkYear % 400 == 0) {
            return true
        }
        else if (checkYear % 100 == 0 && !checkYear % 400 == 0) {
            return false;
        }
        return true;        
     }
    else {
        return false;
    }
};

//  { return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);}; ideal solution

// Do not edit below this line
module.exports = leapYears;
