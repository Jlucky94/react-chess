import React from 'react';
import classes from 'Board/Square/square.module.css'
import {FigureType} from "Board/Board";
import whitePawn from 'assets/whiteChess.jpeg'
import blackPawn from 'assets/blackChess.jpeg'


type PropsType = {
    figure: FigureType,
    onMove: (letter: number, num: number,figure:FigureType) => void,
    letter: number,
    num: number
}


const SquareWithFigure = (props: PropsType) => {
    const onMoveHandler = () => {
        console.log('current figure:',props.figure)
        props.figure && props.onMove(props.letter, props.num,props.figure)
    }

    const squareClasses = `${classes.square} ${(props.num + props.letter )% 2 === 0 ? classes.white : classes.black}`

    return (
        <div className={squareClasses} onClick={onMoveHandler}>
            {props.figure.figure &&
                <img className={classes.img} src={props.figure.color==='white'?whitePawn:blackPawn} alt={'A pawn'}/>}
        </div>
    );
};

export default SquareWithFigure;