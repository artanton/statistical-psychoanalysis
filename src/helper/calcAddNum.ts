export const calcFirstAddNumber = (formattedDate:string)=>formattedDate
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0);
   
    export const calcSecondAddNumber = (firstAddNumber: number)=> firstAddNumber>9? firstAddNumber
    .toString()
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0): firstAddNumber;

    
    export const calcThirdAddNumber = (num: number, dateToCalc: string) => {
        if (Number(dateToCalc.substring(0, 1))) {
            return num - 2 * Number(dateToCalc.substring(0, 1));
        } else {
            return num - 2 * Number(dateToCalc.substring(1, 2));
        }
    };
    export const calcfourthAddNumber= (thirdAddNumber:number)=> thirdAddNumber>9?thirdAddNumber
    .toString()
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0): thirdAddNumber;

    export const calculateHiddenPurpose = (character,  health, luck, work)=>{
        console.log(typeof(character) );
        console.log('character',character.split('').length );
        let newCharacter;
         
         switch (character){
            case character==="":
                newCharacter =0 
                console.log(1);
                break;
            case character.length%2==1:
                console.log(2);
                newCharacter = 1
                break;
                default:
                    console.log(3);
                    newCharacter = 2; 

        }
        const newLuck = work===""?luck.split('').length: luck.split('').length + work.split('').length;
        console.log("newCharacter",newCharacter,character.split('').length%2);
        console.log("newLuck",newLuck);

        const hiddenPurpose = newCharacter + newLuck + health.split('').length;
        return hiddenPurpose.toString();
    }
  