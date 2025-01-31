const findTheOldest = function(arr) {
    let oldest = 0;
    let obj = {}
    arr.forEach(person => {
        let age = person.yearOfDeath - person.yearOfBirth
        if (age > oldest) {
            oldest = age;
            obj = person;
        }
    })
    return obj;
};

// Do not edit below this line
module.exports = findTheOldest;
