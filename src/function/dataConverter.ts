import { creditOption, creditValue, gradeOption, gradeValue } from "../@types/global";

export const gradeValueToOption = (value:gradeValue): gradeOption => {
    switch (value) {
        case -1:
            return 0
        case 5:
            return 1
        case 4:
            return 2
        case 3:
            return 3
            case 2:
                return 4
        case 0:
            return 5
        default:
            return 0
    }
}

export const gradeOptionToValue = (option:gradeOption): gradeValue => {
    switch (option) {
        case 0:
            return -1
        case 1:
            return 5
        case 2:
            return 4
        case 3:
            return 3
        case 4:
            return 2
        case 5:
            return 0
        default:
            return -1
    }
}

export const creditOptionToValue = (option:creditOption): creditValue => {
    switch (option) {
        case 0:
            return -1
        case 1:
            return 0
        case 2:
            return 1
        case 3:
            return 2
        case 4:
            return 3
        case 5:
            return 4
        default:
            return -1
    }
}

export const creditValueToOption = (value:creditValue): creditOption => {
    switch (value) {
        case -1:
            return 0
        case 0:
            return 1
        case 1:
            return 2
        case 2:
            return 3
        case 3:
            return 4
        case 4:
            return 5
        default:
            return 0
    }
}