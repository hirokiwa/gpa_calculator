import { creditOption, gradeOption } from "../@types/global";

interface argument {
    elementNumber: number,
    gradeOption?: gradeOption,
    creditOption?: creditOption
}

const changeSelectedValue = ({ elementNumber, gradeOption, creditOption }: argument): void => {
    if (
        !document.getElementById("credit" + elementNumber) ||
        !document.getElementById("grade" + elementNumber)
    ) {
        return;
    }

    const creditSelecter = document.getElementById(
        "credit" + elementNumber
    ) as HTMLSelectElement;
    const gradeSelecter = document.getElementById(
        "grade" + elementNumber
    ) as HTMLSelectElement;
    
    
    if (gradeOption !== undefined) {
        gradeSelecter.options[gradeOption].selected = true;
    }
    if (creditOption !== undefined) {
        creditSelecter.options[creditOption].selected = true;
    }
}

export default changeSelectedValue;