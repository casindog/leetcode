/**
 * Initialize your data structure here.
 */
var TwoSum = function () {
  // this.addedNums = {}

  this.addedNums = [];
};

/**
 * Add the number to an internal data structure..
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  this.addedNums.push(number);
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 value = 2
 num = 5
 */
TwoSum.prototype.find = function (value) {
  let sorted = this.addedNums.sort((a, b) => a - b);

  let [left, right] = [0, sorted.length - 1];

  while (left < right) {
    let potentialMatch = sorted[left] + sorted[right];
    if (potentialMatch < value) left += 1;
    else if (potentialMatch > value) right -= 1;
    else if (potentialMatch === value) return true;
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

//     let searchArr = Object.keys(this.addedNums)

//     let result = false
//     for ( let num of searchArr){
//         let potentialMatch = value - num

//         if (this.addedNums.hasOwnProperty(potentialMatch)){
//            if(num == potentialMatch && this.addedNums[num] < 2){
//                result = false
//            } else {
//                result = true
//            }
//         }
//     }
//     return result

// this.addedNums[number] = true
// if (this.addedNums[number]){
//     this.addedNums[number] += 1
// } else {
//     this.addedNums[number] = 1
// }

// this.addedNums[number] ? this.addedNums[number] += 1 : this.addedNums[number] = 1


// KC. I tried running my code w/ a map data structure instead of an object. that made a difference in terms of speed. 

// var TwoSum = function() {
//     this.hash = {}
// };

// /**
//  * Add the number to an internal data structure.. 
//  * @param {number} number
//  * @return {void}
//  */
// TwoSum.prototype.add = function(number) {
//     this.hash[number] = 1 + (this.hash[number] || 0)
// };

// /**
//  * Find if there exists any pair of numbers which sum is equal to the value. 
//  * @param {number} value
//  * @return {boolean}
//  */
// TwoSum.prototype.find = function(value) {
//     // console.log(this.hash)
//     const arr = Object.keys(this.hash)
//     for (let i=0; i<arr.length; i++) {
//         const [k,v] = [parseInt(arr[i]), this.hash[arr[i]]]
//         const complement = value - k
//         if (complement in this.hash) {
//             if (complement === k && v > 1) return true 
//             if (complement !== k) return true
//         }
//     }
//     return false
// };
