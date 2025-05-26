import type { Imatrix } from "../interface";
import {
  calcFirstAddNumber,
  calcfourthAddNumber,
  calcSecondAddNumber,
  calcThirdAddNumber,
  calculateHiddenPurpose,
} from "./calcAddNum";



export const calculate = (date: string): Imatrix => {
  const formattedDate = `${date.substring(0, 2)}${date.substring(
    3,
    5
  )}${date.substring(6, 10)}`;

  const firstAddNumber = calcFirstAddNumber(formattedDate);
  const secondAddNumber = calcSecondAddNumber(firstAddNumber);
  const thirdAddNumber = calcThirdAddNumber(firstAddNumber, formattedDate);
  const fourthAddNumber = calcfourthAddNumber(thirdAddNumber);
  const arrToSickNumbers = formattedDate
    .concat(
      firstAddNumber.toString(),
      secondAddNumber.toString(),
      thirdAddNumber.toString(),
      fourthAddNumber.toString()
    )
    .split("");

    const character= arrToSickNumbers.filter(num=> num === "1").join("");
    const energy= arrToSickNumbers.filter(num=> num === "2").join("");
    const intrest= arrToSickNumbers.filter(num=> num === "3").join("");
    const health= arrToSickNumbers.filter(num=> num === "4").join("");
   const logic= arrToSickNumbers.filter(num=> num === "5").join("");
    const work= arrToSickNumbers.filter(num=> num === "6").join("");
    const luck= arrToSickNumbers.filter(num=> num === "7").join("");
    const debt= arrToSickNumbers.filter(num=> num === "8").join("");
    const memory= arrToSickNumbers.filter(num=> num === "9").join("");

    const hiddenPurpose =calculateHiddenPurpose(character,  health, luck, work);

  const matrix = {
    date: date,
    firstAddNumber: firstAddNumber.toString(),
    secondAddNumber: secondAddNumber.toString(),
    thirdAddNumber: thirdAddNumber.toString(),
    fourthAddNumber: fourthAddNumber.toString(),
    fateNumber: secondAddNumber.toString(),
    character: character,
    energy: energy,
    intrest: intrest,
    health: health, 
    logic: logic,
    work: work,
    luck: luck,
    debt: debt,
    memory: memory,
    life: health.concat(logic, work).split('').length.toString(),
    temper: intrest.concat(logic, luck).split('').length.toString(),
    purpose: character.concat(health, luck).split('').length.toString(),
    hiddenPurpose: hiddenPurpose,
    family: energy.concat(logic, debt).split('').length.toString(),
    habits: intrest.concat(work,memory).split('').length.toString(),
  };
  return matrix;
};
