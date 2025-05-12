type date = string;

export const calculate =(date: date)=>{
const formattedDate = `${date.substring(0,2)}${date.substring(3,5)}${date.substring(6,10)}`;
const firstAddNumber = formattedDate.split('').reduce((acc, curr)=>acc+parseInt(curr),0);
const secondAddNumber = firstAddNumber.toString().split('').reduce((acc, curr)=>acc+parseInt(curr),0);
const matrix ={
    "date": date,
    "firstAddNumber": firstAddNumber,
    "secondAddNumber": secondAddNumber,
    

}
console.log(matrix, typeof secondAddNumber);

}