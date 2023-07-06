import React, {useEffect, useState} from 'react';
import Square from "Board/Square/Square";
import SquareWithFigure from "Board/Square/SquareWithFigure";
import {deepCopy} from "shared/utils/deepcopy";
import {createInitialBoard} from "shared/utils/createInitialBoard";
import pawnMove from "shared/turns/pawnMove";

export type GBoardType = {
    [key: number]: FigureType[]
}
export type FigureType = {
    figure: string | null,
    color?: 'black' | 'white'
}


const Board = () => {
    const [gBoard, setGBoard] = useState<GBoardType>({})

    const chessLetters = [0, 1, 2, 3, 4, 5, 6, 7]
    const chessNumbers = [0, 1, 2, 3, 4, 5, 6, 7]

    useEffect(() => {
        let initialBoard = createInitialBoard()
        setGBoard(initialBoard)
    }, [])


    const onMove = (letter: number, num: number,figure:FigureType) => {
        console.log('MOVE')
        setGBoard( pawnMove(letter,num,figure,gBoard))

    }
    if (Object.keys(gBoard).length===0) {
        return null
    }
    const gameBoard = chessLetters.map((letter, letIndex) => (
        <div key={`${letter}-${letIndex}`} style={{display: 'flex', flexDirection: 'row'}}>
            {gBoard[letter].map((figure, numIndex) => (
                <SquareWithFigure key={`${letter}-${letIndex}-${numIndex}`} letter={letter} num={numIndex}
                                  figure={figure} onMove={onMove}/>
            ))}
        </div>
    ))


    return (
        <div>
            {gameBoard}
        </div>
    );
};

export default Board;