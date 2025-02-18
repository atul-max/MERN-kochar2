// const btn1 = document.querySelector('#btn1');
// // btn1.onclick= (event) => {
// //     console.log("btn clicked",event)
// // }
// btn1.addEventListener('click',()=>{
//     console.log("btn clicked")
// })
// btn1.addEventListener('click',()=>{
//     console.log("btn clicked1")
// })
// btn1.addEventListener('click',btn2_remove)
// const btn2_remove = ()=>{
//     console.log("btn clicked2")
// };
// btn1.removeEventListener('click',btn2_remove)

let mode = document.querySelector('#mode');
let cur_mode = "light";
mode.addEventListener('click',() =>{
    if(cur_mode =="light"){
        document.querySelector('body').style.backgroundColor ="black"
        document.querySelector('p').style.color ="white"
        cur_mode ="dark";
    }else{
        cur_mode = "light";
        document.querySelector('body').style.backgroundColor ="white"
        document.querySelector('p').style.color ="black"
    }
})