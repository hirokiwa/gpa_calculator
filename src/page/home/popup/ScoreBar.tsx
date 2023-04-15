
import React, { FC, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface Props  {
    gpa: number
}

const ScoreBare: FC<Props> = ({ gpa }): JSX.Element => {
    const [displayGpa, setDisplayGpa] = useState<number>(0);
    const [position, setPosition] = useState(0);
    const scoreBarInnerElement = useRef<HTMLDivElement>(null);
    const scoreBarOuterElement = useRef<HTMLDivElement>(null);
    const [isAnimationed, setIsAnimationd] = useState<boolean>(false);
    const ANIMATION_LEMGTH = 1000;
    
    let reqestId: number;
    let functionCalledCounter = 1;

    const updatePosition = () => {
        if (isAnimationed) {
            setDisplayGpa(gpa);
            cancelAnimationFrame(reqestId);
            return;
        }
        const innerElement = scoreBarInnerElement.current;
        const outerElement = scoreBarOuterElement.current;
        if (innerElement && outerElement) {
            const startPosition = outerElement.getBoundingClientRect().x;
            const innerRight = innerElement.getBoundingClientRect().right;
            const outerRight = outerElement.getBoundingClientRect().right;
            
            const outerLength = outerRight - startPosition;
            const innerLength = innerRight - startPosition;
            
            const changedGpa = 5 * innerLength / outerLength;
            
            setDisplayGpa(changedGpa < gpa ? changedGpa : gpa);
            setPosition(innerRight);
        }
        functionCalledCounter += 1;
        cancelAnimationFrame(reqestId);
    };
    
    const animationedHandler = () => {
        setIsAnimationd(true)
    }
    
    reqestId = requestAnimationFrame(updatePosition);
    
    return (
        <>
            <h1>{displayGpa.toFixed(2)}</h1>
            <ScoreBarOuter
                ref={scoreBarOuterElement}
            >
                <ScoreBarInner
                    ref={scoreBarInnerElement}
                    gpa={gpa}
                    animationLength={ANIMATION_LEMGTH}
                    onAnimationEnd={animationedHandler}
                >
                </ScoreBarInner>
            </ScoreBarOuter>
        </>
    );
}

export default ScoreBare;

const ScoreBarOuter = styled.div`
    border: 1px solid #4f4f4f;
    border-radius: 0.75em;
    height: 1em;
    width: 75%;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    margin-bottom: 1.5em;
    `

const fadeIn = keyframes`
    from {
	    transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`

const ScoreBarInner = styled.div<{
    gpa: number,
    animationLength: number
}>`
    height: 1em;
    background-color: #900;
    width: ${({ gpa }) => gpa / 5 * 100}%;
    animation:${fadeIn} ${({ animationLength }) => animationLength}ms;
`
