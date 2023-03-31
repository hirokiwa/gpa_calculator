import { squareData } from "../@types/global";

const getAllSquareData = ():squareData[] => {
    let acquiredData:squareData[] = []
        
    for(let i = 0; i < 30; i++){
        const gradeValue = document.getElementById("grade" + String(i)) as HTMLSelectElement;
        const creditValue = document.getElementById("credit" + String(i)) as HTMLSelectElement;

        const acquiredSquareData = {
            grade: Number(gradeValue.value),
            credit: Number(creditValue.value)
        } as squareData

        acquiredData.push(acquiredSquareData)
    }

    return acquiredData
}

export default getAllSquareData;