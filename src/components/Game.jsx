import React, {useState} from 'react'
import Board from './Board';
import './Game.css'
import { calculateWinner } from '../helper';

const Game = () => {
    const [board, setBoard] = useState (Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
        // Клик по ячейки был или закончилась игра
        if (winner || boardCopy[index]) return
        // Кто ходит первый 
        boardCopy[index] = xIsNext ? 'X' : '0'
        // Обновляем игру
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return(
            <button className='start_btn' onClick={() => setBoard(Array(9).fill(null))}>Играем сначала ?</button>
        )
    }

    return (
        <div className='wrapper'>
            { startNewGame()}
            <Board squares={board} click={handleClick} />
            <p className='game__info'>
                {winner ? 'Победил' + winner : 'Сейчас ходит' + (xIsNext ? 'X' : 'O')}
            </p>
        </div>
    );
}

export default Game
