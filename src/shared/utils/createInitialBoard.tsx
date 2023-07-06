import {GBoardType} from "Board/Board";


export const createInitialBoard = (): GBoardType => {
    const chessLetters = [0, 1, 2, 3, 4, 5, 6, 7];
    const initialBoard: GBoardType = {};

    chessLetters.forEach((letter) => {
        initialBoard[letter] = [];

        if (letter === 0 || letter === 7) {
            for (let i = 0; i < 8; i++) {
                initialBoard[letter].push({ figure: 'pawn', color: letter === 0 ? 'white' : 'black' });
            }
        } else {
            for (let i = 0; i < 8; i++) {
                initialBoard[letter].push({ figure: null });
            }
        }
    });

    return initialBoard;
};

