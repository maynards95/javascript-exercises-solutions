const sumAll = function(startInt, endInt) {
    let finalSum = 0;
    while (startInt >= 0 && endInt >= 0 && Number.isInteger(startInt) & Number.isInteger(endInt)){
        if (startInt < endInt) {
                for (let i = startInt; i <= endInt; i++) {
                    finalSum += i;
                }
                return finalSum;
            }
            if (startInt > endInt) {
                for (let i = endInt; i <= startInt; i++) {
                    finalSum += i;
                }
                return finalSum;
            }
    }
        return "ERROR";
}

// Do not edit below this line
module.exports = sumAll;
