//example of async await

// const probj1 = new Promise ((resolve,reject)=>{
//       setTimeout(() => {
//          let roll_no =[1,2,3,4,5];
//          resolve(roll_no);
//       }, 2000);
//     });
//     const getbiodata =(indexdata)=>{
//       return new Promise((resolve,reject)=>{
//         setTimeout((indexdata) => {
//           let biodata ={
//             name:"deepak",
//             age:24
//           }
//           resolve (`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} yrs old`);
//         }, 2000,indexdata);
//       })
//     }
//     async function getData(){
//       const rollnodata = await probj1;
//       console.log(rollnodata);
//       const biodatas = await getbiodata(rollnodata[1]);
//       console.log(biodatas);
//     }
//     getData();
    