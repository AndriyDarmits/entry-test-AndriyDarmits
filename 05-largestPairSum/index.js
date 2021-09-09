/**
 * largestPairSum - Returns sum of highest and lowest values in array:
 * @param {array} numbers - the array of numbers
 * @returns {number} - returns the new number
 */
export const largestPairSum = (numbers) => {

  /*let a = -Infinity,
      b = -Infinity;

  for (let item of numbers)
    if (item > a && b > -Infinity)
      a = item;
    else if (item > b)
      b = item;

  return a+b;*/
    let largest = numbers.slice(0, 2),
        smallest = largest[0] < largest[1] ? 0 : 1;

    for (let i = 2; i < numbers.length; i++) {
        if (largest[smallest] > numbers[i]) continue;
        largest[smallest] = numbers[i];
        smallest = largest[0] < largest[1] ? 0 : 1;
    }
    return largest[0] + largest[1];
}


