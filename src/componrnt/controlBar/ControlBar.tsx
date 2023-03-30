import { FC } from "react";
import styled from "styled-components";
import resetTable from "../../function/resetTable";

interface Props{
    isBrank:boolean;
    setIsBrank:React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlBar:FC<Props> = ({isBrank, setIsBrank}):JSX.Element => {
    return (
        <>
            {/* <ControlButton>
                <span className="material-icons">
                    arrow_back
                </span>
            </ControlButton>
            <ControlButton>
                <span className="material-icons">
                    arrow_forward
                </span>
            </ControlButton> */}
            <ControlButton
                onClick = {() => setIsBrank(resetTable())}
                disabled = { isBrank }
            >
                <span className="material-icons">
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