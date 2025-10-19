/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  // merge nums1 & nums2 into a single array sorted in non-decreasing order
  // final sorted array stored in nums1

  // nums1 length = m + n
  // nums2 length = n
  // m = jumlah element in nums 1 yang bukan 0
  // n = jumlah element in nums 2

  // best case
  if (n === 0) return;

  let j = 0;
  let temp = 0;
  for (let i = m; i < nums1.length; i++, j++) {
    let elB = nums2[j];
    nums1[i] = elB;
  }
  nums1.sort((a, b) => a - b);
}
