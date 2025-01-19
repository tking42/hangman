import {useCallback, useState} from "react";
import words from "./wordList.json"
import HangmanDrawing from "./HangmanDrawing.tsx";
import HangmanWord from "./HangmanWord.tsx";
import Keyboard from "./Keyboard.tsx";
import styling from "./App.module.css"

function App() {
  const [wordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    const addGuessedLetter = useCallback((letter: string) => {
      if (guessedLetters.includes(letter)) return
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters])

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

    return (
    <div style={{
      maxWidth: "600px",
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      margin: "0 auto",
      alignItems: "center",
      fontFamily: "monospace"
    }}>
      <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
        {isWinner && (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <p>Well done! You won.</p>
              <button onClick={() => window.location.reload()} className={styling.btn}>Play Again</button>
            </div>
        )}

        {isLoser && (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <p>Unlucky! You lost.</p>
              <button onClick={() => window.location.reload()} className={styling.btn}>Play Again</button>
            </div>
        )}
      </div>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser}/>
        <div style={{alignSelf: "stretch"}}>
            <Keyboard disableKeys={isWinner || isLoser} activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))} addGuessedLetter={addGuessedLetter} inactiveLetters={incorrectLetters}/>
        </div>

    </div>
  )
}

export default App
