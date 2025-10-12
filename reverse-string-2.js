// @ts-check

const str = "abcdefg";
const max = 2;

/**
 *
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
function reverseString(s, k) {
  const arr = Array.from(s);
  const group = 2 * k;
  console.log("arr :", arr);
  console.log("group :", group);

  let i = 0;
  console.log("karakter pertama group 1 :", arr[i]);

  let j = 2 * k;
  console.log("karakter pertama group 2 :", arr[j]);

  let x = 2 * k - 1;
  console.log("karakter terakhir group 1 :", arr[x]);

  let y = 4 * k - 1;
  console.log(
    "karakter terakhir group 2 :",
    arr[y] ? arr[y] : arr[arr.length - 1]
  );

  // group 1 : [a, b, c, d];
  const temp = arr[1];
  arr[1] = arr[0];
  arr[0] = temp;

  console.log("step 1: arr :", arr);

  // group 2 : [e, f, g]
  const temp2 = arr[j];
  arr[j] = arr[j + 1];
  arr[j + 1] = temp2;

  console.log("step 2: arr :", arr);

  return arr.join("");
}

// const result = reverseString("abcdefg", 2);
// console.log("result :", result);

/**
 *
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
function reverseStringStep1(s, k) {
  const arr = Array.from(s);
  const n = arr.length;
  const group = 2 * k;

  let i = 0;

  while (i < n) {
    const end = Math.min(i + group, n); // tentuin karakter terakhir setiap group
    const endChar = Math.min(i + k, n); // tentuin karakter terakhir dari k
    console.log(`block start: ${i}, end=${end}, endChar=${endChar}`);

    let left = i;
    let right = endChar - 1;

    while (left < right) {
      [arr[right], arr[left]] = [arr[left], arr[right]];
      left++;
      right--;
    }

    console.log(`after block start=${i}`, arr.join(""));

    i += group;
  }

  return arr.join("");
}

reverseStringStep1(str, max);
