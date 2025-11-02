// @ts-check

/**
 *
 * @param {number[]} nums
 * @param {number} target
 */
function twoSum(nums, target) {
  let map = new Map();
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    const s = target - nums[i];
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(s, i);
    }
  }
  return [];
}
