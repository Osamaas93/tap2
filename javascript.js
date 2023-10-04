/* Q2: Javascript Question
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */


function targetCount(nums , target) {  
    var newArray= [];
      for (var n = 0; n < nums.length; n++) {
        for (var position = n + 1; position < nums.length; position++) {
          if (nums[n] + nums[position] === target) {
            newArray.push(n);
              newArray.push(position);
              return newArray;
          }
        }
      }
    }
    var nums = [2, 7, 11, 15];
    var target = 9;
    
    console.log(targetCount(nums , target));

