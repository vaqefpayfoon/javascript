checkDuplicate();
function checkDuplicate() {
  let arr = ["abc", "xy", "bb", "abc"];
  let result = false;

  result = arr.some((element, index) => {
    // console.log(arr.indexOf(element))
    // console.log(index)
    return arr.indexOf(element) !== index;
  });
  //console.log(result);
}

const findDuplicates = (nums) => {
  nums.sort();
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      if (ans[ans.length - 1] !== nums[i]) {
        ans.push(nums[i]);
      }
    }
  }
  return ans;
};
// console.log(findDuplicates([2, 4, 6, 2]));

const names = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];
const count = (names) =>
  names.reduce((a, b) => ({ ...a, [b]: (a[b] || 0) + 1 }), {});

const duplicates = (dict) => Object.keys(dict).filter((a) => dict[a] > 1);

// console.log(count(names)); // { Mike: 1, Matt: 1, Nancy: 2, Adam: 1, Jenny: 1, Carl: 1 }
// console.log(duplicates(count(names))); // [ 'Nancy' ]


const input = [1, 2, 3, 1, 3, 1];

const getDuplicates = input.reduce(function(acc, el, i, arr) {
  if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
}, []);

// console.log(getDuplicates); // = 1,3 (actual array == [1, 3])

const findAllDuplicates = [1, 2, 2, 4, 3, 4].filter((e, i, a) => a.indexOf(e) !== i);
// [2, 4]
console.log(findAllDuplicates)
const removeAllDuplicates = [1, 2, 2, 4, 3, 4].filter((e, i, a) => a.indexOf(e) === i)
// [1, 2, 3, 4]
console.log(removeAllDuplicates)

const findEvery = [1, 2, 3].every((e, i, a) => a.indexOf(e) === i) // true
console.log(findEvery)

const searchEvery = [1, 2, 1].every((e, i, a) => a.indexOf(e) === i) // false
console.log(searchEvery)