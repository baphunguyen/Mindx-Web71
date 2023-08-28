/*
    Input: 
    Output: là một string thoã điều kiện:
        1 - Nếu chia hết cho 3 => Fizz
        2 - Nếu chia hết cho 5 => Buzz
        3 - Nếu chia hết cho cả 5 và 3 => FizzBuzz
*/

function problemOne() {
  let result = "";

  //   Logic
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz";
    } else if (i % 3 === 0) {
      result += "Fizz";
    } else if (i % 5 === 0) {
      result += "Buzz";
    }
  }

  return result;
}
// FizzBuzzFizzFizzBuzzFizzFizzBuzz
// console.log(problemOne());

/*
    Input: string
    Output: số lượng nguyên âm xuất hiện trong string
    Logic:
            Nguyên âm: "e", "u", "o", "a", "i".
    
    "I love Viet Nam"        

    Loop
       - Với từng kí tự => kiểm tra xem có phải là NGUYÊN ÂM
       - Nếu là NGUYÊN ÂM => tăng biến đếm
             KHÔNg là NA. => skip
    - Return
*/
function countVowels(str) {
  let count = 0;
  const vowels = ["e", "u", "o", "a", "i"];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (vowels.includes(char)) {
      count += 1;
    }
  }

  return count;
}

// console.log(countVowels("anhyeuem")); //→ 4
// console.log(countVowels("Viet Nam vo dich. Malaysia tuoi gi :))")); //→ 13
// console.log(countVowels("")); //→ 0
// console.log(countVowels("Javascript is a beautiful programming language)")); // → 17
// countVowels(123) //→ "Dữ liệu đầu vào không hợp lệ!!!"

/*
    Input:[  7,1, 5, 13, 20 ]

    const result = [1,210,100,7,];

    Output: [1,210,100,7]

    -> empty array []
    -> loop input array
    ->   if i exist in empty array 
    ->  TRUE: => push
    ->  FALSE: => skip 
*/

function removeDuplicateFromArray(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(removeDuplicateFromArray([1, 1, -1, 3, 5, 10])); // => [1,-1,3,5,10]
console.log(removeDuplicateFromArray([true, 3, "hello", false, "hello", true])); //=> [true,3,"hello",false]
console.log(removeDuplicateFromArray(["a", "b", "c", "d", "d", "c", "a"])); // => ['a','b','c','d']
console.log(removeDuplicateFromArray("Hello")); // => "Du lieu dau vao khong hop le"
