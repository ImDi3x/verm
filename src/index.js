import "./styles.css";

module.exports = {
  el: (selector) => document.querySelector(""),
  data: (value) => {
    let data = {},
      regExpBinding = /^\{\s*(\w+)\s*\}$/i,
      regExpFunctions = /\w*(\.)\w+/i;
  }
};

const test = new RegExp(/\w*(\.)\w+/, "i").test("hello.map(() =>{})");
let data = {
    string: "hello",
    number: 5,
    array: ["a", "b", "c"]
  },
  regExpBinding = /\{\s*(\w+)\s*\}/i,
  regExpFunctions = /\w*(\.)\w+/i;
// console.log('{array}'.match(regExpBinding))
console.log(regExpBinding.test("{array}"));
