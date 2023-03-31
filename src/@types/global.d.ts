export type gradeValue = -1 | 5 | 4 | 3 | 2 | 0;
export type gradeOption = 0 | 1 | 2 | 3 | 4 | 5;
export type creditValue =  -1 | 0 | 1 | 2 | 3 | 4;
export type creditOption = 0 | 1 | 2 | 3 | 4 | 5;

export interface squareData{
    grade: gradeValue;
    credit: creditValue;
}

export interface changedSquare{
    elementNumber: number;
    before: squareData;
    after: squareData;
}

export type changedSquareArray = changedSquare[]