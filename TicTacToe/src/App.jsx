import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  x: 'x',
  o: 'o'
}

const board = Array(9).fill(null)

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className=`square ${isSelected ? 'is-selected' : ''}`
  
  return(
    <div className={className}>
      {children}
    </div>
  )
}

function App() {
  const[board, setBoard] = useState(Array(9).fill(null)) 
  const [turn, setTurn] = useState(TURNS.x)
  
  return (
    <main className="board">
      <h1 className="title">Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
              >
                  {index}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>
    </main>
  )
}

export default App
