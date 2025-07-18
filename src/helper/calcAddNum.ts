export const calcFirstAddNumber = (formattedDate: string) =>
  formattedDate.split("").reduce((acc, curr) => acc + parseInt(curr), 0);

export const calcSecondAddNumber = (firstAddNumber: number) =>
  firstAddNumber > 9
    ? firstAddNumber
        .toString()
        .split("")
        .reduce((acc, curr) => acc + parseInt(curr), 0)
    : firstAddNumber;

export const calcThirdAddNumber = (num: number, dateToCalc: string) => {
  if (Number(dateToCalc.substring(0, 1))) {
    return num - 2 * Number(dateToCalc.substring(0, 1));
  } else {
    return num - 2 * Number(dateToCalc.substring(1, 2));
  }
};
export const calcfourthAddNumber = (thirdAddNumber: number) =>
  thirdAddNumber > 9
    ? thirdAddNumber
        .toString()
        .split("")
        .reduce((acc, curr) => acc + parseInt(curr), 0)
    : thirdAddNumber;

export const calculateHiddenPurpose = (
  character: string,
  health: string,
  luck: string,
  work: string
) => {
  console.log(typeof character);
  console.log("character", character.split("").length % 2);
  console.log("work", work.split("").length);
  let newCharacter;

  if (character.length === 0) {
    newCharacter = "";
  } else if (character.split("").length % 2 === 1) {
    newCharacter = "1";
  } else {
    newCharacter = "11";
  }
  const newLuck = luck + work;
  console.log("newCharacter", newCharacter.split("").length);
  console.log("newLuck", newLuck.split("").length);
  console.log("health", health.split("").length);

  const hiddenPurpose =
    newCharacter.split("").length +
    newLuck.split("").length +
    health.split("").length;
  return {
    hiddenPurpose: hiddenPurpose.toString(),
    newLuck,
  };
};
