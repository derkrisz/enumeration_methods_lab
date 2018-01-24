var arrayTasks = {

	concat: function (arr1, arr2) {
		var concatArray = arr1.concat(arr2);
		return concatArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(x){
			return Math.pow(x, 2);
		})
	},

	sum: function (arr) {
		return arr.reduce(function(total, currentValue){
			return total + currentValue;
		}, 0);
	},

	findDuplicates: function (arr) {
		let duplicates = [];

		arr.forEach(function(number, index){
			if (arr.indexOf(number, index + 1) > -1) {
				if (duplicates.indexOf(number) === -1) {
					duplicates.push(number);
				}
			}
		})
		return duplicates;

	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(function(element){
			return element !== valueToRemove;
		})
	},

	findIndexesOf: function (arr, itemToFind) {
		let indexArray = [];
		arr.forEach(function(value, index){
			if (value === itemToFind) {
				indexArray.push(index);
			}
		})
		return indexArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var emptyArray = [];
		arr.forEach(function(number){
			if (number % 2 === 0) {
				var squaredNumber = Math.pow(number, 2);
					emptyArray.push(squaredNumber);
			}
		})

		 var squaredArray = emptyArray.reduce(function(total, currentValue) {
			return total + currentValue;
		})
		return squaredArray;
	}

}

module.exports = arrayTasks
