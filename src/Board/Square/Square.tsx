import React from 'react';
import classes from 'Board/Square/square.module.css'

const Square = (props: { letter: string, num: number }) => {
    return (
        <div className={classes.square}>
            {props.letter + props.num}
            {(props.letter === 'a' || props.letter === 'b' || props.letter === 'd' || props.letter === 'e') &&
                <img src={''} alt={'A pawn'}/>}
        </div>
    );
};

export default Square;