export interface Imatrix  {
    date: string;
    firstAddNumber: string; 
    secondAddNumber: string;    
    thirdAddNumber: string;
    fourthAddNumber: string;
    fateNumber: string;
    character: string;
    energy: string;
    intrest: string;
    health: string;
    logic:string;
    work: string;
    luck: string;
    debt: string;
    memory: string;
    life: string;
    temper: string;
    purpose: string;
    hiddenPurpose: string;
    family: string;
    habits: string;
  };
  export interface InputProps {
    onResult: (matrix: Imatrix) => void;
  }

    export interface ChartProps {
        matrix: Imatrix |null;
    };