import React, {useState} from 'react';
import Square from "Board/Square/Square";
import SquareWithFigure from "Board/Square/SquareWithFigure";
import {deepCopy} from "shared/utils/deepcopy";

type GBoardType = {
    [key: number]: (string | null)[]
}

const Board = () => {
    const [gBoard,setGBoard] = useState<GBoardType>({})
    // let gBoard:GBoardType = {}

    const chessLetters = [0, 1, 2, 3, 4]
    const chessNumbers = [0, 1, 2, 3, 4]
    chessLetters.forEach(letter=> {
        gBoard[letter] = []
        chessNumbers.forEach(number=> {
            if(letter===0||letter===4) {
                gBoard[letter].push('pawn')
            }else {
                gBoard[letter].push(null)
            }
        })
    })


    const onMove = (letter:number,num:number)=> {
        console.log('MOVE')
        if(gBoard[letter+1][num]===null&&gBoard[letter+2][num]===null) {
            let gBoardCopy = deepCopy(gBoard)
            gBoardCopy[letter+2][num]='pawn'
            gBoardCopy[letter][num]=null
            console.log('curfigureCopy:',letter,'-',num,gBoardCopy[letter][num])
            console.log('gboard:',gBoard,'copy:',gBoardCopy)
            setGBoard((gBoardCopy))
            console.log(gBoard)
        }
    }


    const gameBoard = chessLetters.map((letter,letIndex) => (
        <div key={`${letter}-${letIndex}`} style={{display: 'flex', flexDirection: 'row'}}>
            {gBoard[letter].map((figure,numIndex)=>(
                <SquareWithFigure key={`${letter}-${letIndex}-${numIndex}`} letter={letter} num={numIndex} figure={figure} onMove={onMove}/>
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