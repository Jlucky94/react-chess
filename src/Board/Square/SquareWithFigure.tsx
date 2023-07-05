import React from 'react';
import classes from 'Board/Square/square.module.css'

type PropsType = {
    figure: string | null,
    onMove: (letter: number, num: number) => void,
    letter: number,
    num: number
}


const SquareWithFigure = (props: PropsType) => {
    const onMoveHandler = () => {
        console.log('current figure:',props.figure)
        props.figure && props.onMove(props.letter, props.num)
    }


    return (
        <div className={classes.square} onClick={onMoveHandler}>
            {props.figure &&
                <img src={''} alt={'A pawn'}/>}
            <div>({props.letter}) - ({props.num})</div>
        </div>
    );
};

export default SquareWithFigure;