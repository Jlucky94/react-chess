import {FigureType, GBoardType} from "Board/Board";
import {deepCopy} from "shared/utils/deepcopy";

const pawnMove = (letter: number, num: number, figure: FigureType, gBoard: GBoardType): GBoardType => {
    let gBoardCopy: GBoardType = deepCopy(gBoard)

    if (figure.color === 'white') {
        if (letter === 0) {
            gBoardCopy=pawnFirstMove(letter, num, figure, gBoard)
        } else if (gBoard[letter + 1][num].figure === null) {
            gBoardCopy[letter + 1][num] = figure
            gBoardCopy[letter][num] = {figure: null}
        }
    } else {
        if (letter === 7) {
            gBoardCopy=pawnFirstMove(letter, num, figure, gBoard)
        } else if (gBoard[letter - 1][num].figure === null) {
            gBoardCopy[letter - 1][num] = figure
            gBoardCopy[letter][num] = {figure: null}
        }
    }
    console.log(gBoardCopy)
    return gBoardCopy

}

const pawnFirstMove = (letter: number, num: number, figure: FigureType, gBoard: GBoardType): GBoardType => {
    let gBoardCopy: GBoardType = deepCopy(gBoard)

    if (figure.color === 'white') {
        if (gBoard[letter + 1][num].figure === null && gBoard[letter + 2][num].figure === null) {
            gBoardCopy[letter + 2][num] = figure
            gBoardCopy[letter][num] = {figure: null}
        }
    } else {
        if (gBoard[letter - 1][num].figure === null && gBoard[letter - 2][num].figure === null) {
            gBoardCopy[letter - 2][num] = figure
            gBoardCopy[letter][num] = {figure: null}
        }
    }
    return gBoardCopy

}
export default pawnMove;