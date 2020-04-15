// Task

const data = [
    'hello',
    {
        name: 'knot',
        nickName: 'zamak',
        age: 10,
        sayHello: function () {
            console.log('hello, objects')
        }
    }
]
// 1
console.log(data[1].sayHello())
// 2
console.log(data[1].name + " " + data[1].nickName)
// 3
console.log(data[1].sayHello)
console.log(data[1].sayHello())
// 4 return 'hello, objects' + 'undefined'
// 5 https://en.wikibooks.org/wiki/JavaScript/Anonymous_functions

// Normal function definition:
// function hello() {
//   alert('Hello world');
// }
// hello();

// Anonymous function definition:
// var anon = function() {
//   alert('I am anonymous');
// }
// anon();






  // Question
  // 1. อยากให้มันแสดง ข้อความ "hello, objects" ออกมาทาง console
  // 2. อยากให้มันแสดง ข้อความว่า "knot zamak" ออกมาทาง console
  // 3. sayHello กับ sayHello() ต่างกันยังไง
  // 4. function sayHello return อะไร
  // 5. ให้สังเกตการประกาศ function sayHello ว่ามีไรแปลกๆ มั้ย (anonymous function)