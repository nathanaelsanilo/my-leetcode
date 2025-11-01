// @ts-check

/**
 *
 * @param {number} n
 * @returns {boolean}
 */
function isHappy(n) {
  // tentukan apa n adalah happy number
  // happy number ditentukan dari proses:
  // 1. dimulai dari bilangan apapun positif, ganti bilangan tersebut
  // dengan menjumlahkan bilangan akar nya
  // 2. ulangi proses hingga n = 1 atau mengulang tanpa henti tanpa ada angka 1
  // 3. bilangan yang berakhir nilai 1 are happy
  // return true jika n adalah happy number, false jika bukan

  /**
   * @description memecah n menjadi setiap digit
   * @param {number} s
   * @returns {number}
   */
  function countDigit(s) {
    let output = 0;
    while (s) {
      // hitung sisa bagi untuk dapat digit dari paling kanan.
      // contoh: 19 % 10 = 9; 81 % 10 = 1
      let digit = s % 10;

      // hitung kuadrat
      output += digit ** 2;

      // rubah value in place untuk iterasi berikutnya
      // untuk mengambil nilai ke arah kiri
      // contoh 19 / 10 = 1.9 , floor(1.9) = 1
      s = Math.floor(s / 10); // rounded down
    }
    return output;
  }

  let slow = countDigit(n);
  let fast = countDigit(countDigit(n));

  while (slow !== fast) {
    // kalau fast = 1 maka slow pointer juga akan true suatu saat ketika iterasi
    // makanya langsung return true artinya happy number
    if (fast === 1) return true;

    slow = countDigit(slow); // hitung 1 step
    fast = countDigit(countDigit(fast)); // hitung 2 step
  }

  return slow === 1;
}
