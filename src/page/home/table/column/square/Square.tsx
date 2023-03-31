import React, { useEffect, useState } from "react";
import { changedSquare, changedSquareArray, squareData } from "../../../../../@types/global";
import "./Square.css";
interface Square_type {
    id_number: number;
    isBrank: boolean;
    setIsBrank: React.Dispatch<React.SetStateAction<boolean>>;
    currentTable: squareData[];
    setCurrentTable: React.Dispatch<React.SetStateAction<squareData[]>>;
    changeHistory: changedSquareArray[];
    setChangeHistory: React.Dispatch<React.SetStateAction<changedSquareArray[]>>;
    currentHistoryIndex: number;
    setCurrentHistoryIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Square = (props: Square_type): JSX.Element => {

    const onChangeSelectedValue = (selecterKind: "grade" | "credit") => {
        props.setIsBrank(false)
        if (
            !document.getElementById("credit" + props.id_number) ||
            !document.getElementById("grade" + props.id_number)
        ) {
            return;
        }

        const creditSelecter = document.getElementById(
            "credit" + props.id_number
        ) as HTMLSelectElement;
        const gradeSelecter = document.getElementById(
            "grade" + props.id_number
        ) as HTMLSelectElement;

        const whetherToSetCreditAutomatically = props.currentTable[props.id_number].grade === -1 && creditSelecter.value === "-1" && selecterKind === "grade";

        if (whetherToSetCreditAutomatically) {
            creditSelecter.options[3].selected = true;
        }

        const selectedData = {
            grade: Number(gradeSelecter.value),
            credit: whetherToSetCreditAutomatically ? 2 : Number(creditSelecter.value)
        } as squareData

        const currentChange = {
            elementNumber: props.id_number,
            before: props.currentTable[props.id_number],
            after: selectedData
        } as changedSquare

        if (props.currentHistoryIndex + 1 >= props.changeHistory.length) {
            props.setChangeHistory([...props.changeHistory, [currentChange]])            
        } else {
            let newHistory = props.changeHistory.filter((history, index) => index <= props.currentHistoryIndex)
            newHistory.push([currentChange])
            props.setChangeHistory(newHistory)
        }

        props.setCurrentHistoryIndex(props.currentHistoryIndex + 1)
        props.setCurrentTable(props.currentTable.map((data, index) => ( index === props.id_number ? selectedData : data)))
    }

    const changedGradeHandler = () => {
        onChangeSelectedValue("grade");
    };
    
    const changedCreditHandler = () => {
        onChangeSelectedValue("credit");
    }

    return (
        <td className="class_box">
            <div>
                <div className="select_outer">
                    <select id={"grade" + props.id_number} style={{color:"black"}} onChange={changedGradeHandler}>
                        <option value="-1" selected disabled>
                            評価　
                        </option>
                        <option value="5">A+</option>
                        <option value="4">A</option>
                        <option value="3">B</option>
                        <option value="2">C</option>
                        <option value="0">F</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="select_outer">
                    <select id={"credit" + props.id_number} style={{color:"black"}} onChange={changedCreditHandler}>
                        <option value="-1" selected disabled>
                            単位数
                        </option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
            </div>
        </td>
    );
};

export default Square;