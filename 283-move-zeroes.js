// @ts-check

/**
 Do not return anything, modify nums in-place instead.
 @param {number[]} nums
 @returns {void}
 */
function moveZeroes(nums) {
  // memindahkan semua angka 0 ke akhir array
  // in-place

  let j = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  for (let i = j; i < n; i++) {
    nums[i] = 0;
  }

  //#region versi 2 : menggunakan while loop
  // let i = 0
  // while (i < n) {
  //     if (nums[i] !== 0) {
  //         nums[j] = nums[i]
  //         j++
  //     }
  //     i++
  // }

  // while (j < n) {
  //     nums[j] = 0
  //     j++
  // }
  //#endregion
}
