// setTimeout(() => {
//   console.log('Two Seconds are up')
// }, 2000)
//
// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b)
//   }, 2000)
// }
//
// add(1, 4, (x) => {
//   console.log(x)
// }) // Should print: 5
//
// const plus = (a, b, ab) =>  {
//   ab(a + b)
// }
//
// plus( 1, 2, (sum) => {
//   console.log(sum)
// })
//
// const easysum = (a,b,c) => {
//   b(a+c)
// }
//
// easysum(1, (b)=>{console.log("The sum is", b)},3)

const whatever = (a,b,callback,supriya) => {

  setTimeout(()=>{
      callback("error occured",a+b,"this is the sum")
  },2000)

  const adam = (name, age) => {
    console.log('name is' + name)
    const twicetheage = age * 2
    console.log(twicetheage)
  }
  adam("theadam",26)
  supriya(24, 16)
}

whatever(1,3,(error, result, comment)=>{
  console.log(result, comment)
}, (a,b)=>{
  console.log(a+b)
})
