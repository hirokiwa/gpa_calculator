import { FC, useState } from "react";
import styled from "styled-components";
import { changedSquareArray, squareData } from "../../@types/global";
import changeSelectedValue from "../../function/changeSelectedValue";
import { creditValueToOption, gradeValueToOption } from "../../function/dataConverter";
import resetTable from "../../function/resetTable";

interface Props{
    isBrank:boolean;
    setIsBrank: React.Dispatch<React.SetStateAction<boolean>>;
    changeHistory: changedSquareArray[];
    setChangeHistory: React.Dispatch<React.SetStateAction<changedSquareArray[]>>;
    currentHistoryIndex: number;
    setCurrentHistoryIndex: React.Dispatch<React.SetStateAction<number>>;
    currentTable: squareData[];
    setCurrentTable: React.Dispatch<React.SetStateAction<squareData[]>>;
}

const ControlBar: FC<Props> = ({ isBrank, setIsBrank, changeHistory, setChangeHistory, currentHistoryIndex, setCurrentHistoryIndex, currentTable,  setCurrentTable}): JSX.Element => {

    const arrowBackHandler = () => {
        if (changeHistory.length < 1) {
            return
        }

        let newTable = currentTable;
        let newIsBrank = true;

        changeHistory[currentHistoryIndex].forEach((change, index) => {
            changeSelectedValue({
                elementNumber: change.elementNumber,
                gradeOption: gradeValueToOption(change.before.grade),
                creditOption: creditValueToOption(change.before.credit)
            })

            const newSquareData = {
                grade: change.before.grade,
                credit: change.before.credit
            } as squareData

            if (newSquareData.grade !== -1  || newSquareData.credit !== -1) {
                newIsBrank = false
            }

            newTable[change.elementNumber] = newSquareData;
        })

        for (let i = 0; i < newTable.length; i++){
            if (!newIsBrank) {
                break
            }

            if (newTable[i].grade !== -1 || newTable[i].credit !== -1) {
                newIsBrank = false;
                break
            }
        }

        setCurrentTable(newTable)
        setIsBrank(currentHistoryIndex === 0 || newIsBrank)
        setCurrentHistoryIndex(currentHistoryIndex - 1)
    }

    const arrowForwardHandler = () => {
        let newTable = currentTable;
        let newIsBrank = true;

        changeHistory[currentHistoryIndex + 1].forEach((change, index) => {
            changeSelectedValue({
                elementNumber: change.elementNumber,
                gradeOption: gradeValueToOption(change.after.grade),
                creditOption: creditValueToOption(change.after.credit)
            })

            const newSquareData = {
                grade: change.after.grade,
                credit: change.after.credit
            } as squareData

            if (newSquareData.grade !== -1  || newSquareData.credit !== -1) {
                newIsBrank = false
            }

            newTable[change.elementNumber] = newSquareData;
        })

        for (let i = 0; i < newTable.length; i++){
            if (!newIsBrank) {
                break
            }

            if (newTable[i].grade !== -1 || newTable[i].credit !== -1) {
                newIsBrank = false;
                break
            }
        }

        setCurrentTable(newTable)
        setIsBrank(newIsBrank)
        setCurrentHistoryIndex(currentHistoryIndex + 1)
    }

    const refreshHandler = () => {
        if (!resetTable()) {
            return
        }

        let difference:changedSquareArray = []
        currentTable.map((square, index) => {
            if (square.credit !== -1 || square.grade !== -1) {
                difference.push({
                    elementNumber: index,
                    before: {
                        grade: square.grade,
                        credit: square.credit
                    },
                    after: {
                        grade: -1,
                        credit: -1
                    }
                })
            }
        })

        setChangeHistory([...changeHistory, difference])
        setCurrentHistoryIndex(currentHistoryIndex + 1);

        setCurrentTable(currentTable.map((square) => (
            {
                grade: -1,
                credit: -1
            }
        )))
        setIsBrank(true)
    }
    
    return (
        <>
            <ControlButton
                onClick={arrowBackHandler}
                disabled={changeHistory.length < 1 || currentHistoryIndex < 0}
            >
                <span className="material-icons"
                    style={changeHistory.length < 1 || currentHistoryIndex < 0
                    ? undefined
                    : {
                        color: "black"
                    }}
                >
                    arrow_back
                </span>
            </ControlButton>
            <ControlButton
                onClick={arrowForwardHandler}
                disabled = {changeHistory.length - currentHistoryIndex <= 1}
            >
                <span className="material-icons"
                    style={changeHistory.length - currentHistoryIndex <= 1
                    ? undefined
                    : {
                        color: "black"
                    }}
                >
                    arrow_forward
                </span>
            </ControlButton>
            <ControlButton
                onClick = {refreshHandler}
                disabled = { isBrank }
            >
                <span className="material-icons"
                    style={isBrank
                    ? undefined
                    : {
                        color: "black"
                    }}
                >
                    refresh
                </span>
            </ControlButton>
        </>
    );
}

const ControlButton = styled.button`
    background-color: transparent;
    border: none;
`

export default ControlBar;