import getAllSquareData from "./getAllSquareData"

export const calculateGpa = (): number | -999  =>{

    const acquiredData = getAllSquareData()

    for(let i = 0; i < acquiredData.length; i++){
        if(acquiredData[i].grade !== acquiredData[i].credit){
            if((acquiredData[i].grade === -1) || (acquiredData[i].credit === -1)){
                alert('正しく入力してください。')
                return -999
            }
        }
    }
    
    const filterdData = acquiredData.filter((data) => {
        return data.credit !== -1 && data.grade !== -1
    })
    
    let sum_score = 0;
    let sum_credit = 0;
    
    filterdData.forEach((data) => {
        sum_score = sum_score + data.credit * data.grade;
        sum_credit = sum_credit + data.credit;
    })

    const GPA = sum_credit !== 0
        ? (() => {
            const quotient = sum_score / sum_credit;
            return Math.floor(quotient * Math.pow(10, 2)) / Math.pow(10, 2);
        }) : 0;
    
    return GPA as number;
}