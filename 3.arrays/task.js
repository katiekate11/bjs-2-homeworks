function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
    }
    
    module.exports = {
    compareArrays
    }
    
    console.log(compareArrays([1, 2, 3], [1, 2, 3]));
    console.log(compareArrays([1, 2], [1, 2, 3]));
    console.log(compareArrays([1, 2, 3], [3, 2, 1]));
    console.log(compareArrays([0, 1, 2], [0, 1]));
    console.log(compareArrays([0, 1], [0, 1, 2]));
    console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]));


    function getUsersNamesInAgeRange(users, gender) {
        let result = users.filter((element) => {
            if (users.length >= 1) {
                return element.gender === gender;
            } else {
                return element === 0
            }
        }).map(element => element.age).reduce((acc, item, index, arr) => {
            const sum = acc + item;
            if (index === arr.length - 1) {
                return sum / arr.length;
            }
            return sum
        }, 0)
        return result;
    }
    
    console.log(getUsersNamesInAgeRange([], "мужской"));