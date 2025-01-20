import { useCallback, useState, useEffect } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing.tsx";
import HangmanWord from "./HangmanWord.tsx";
import Keyboard from "./Keyboard.tsx";
import styling from "./App.module.css";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
      (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = useCallback(
      (letter: string) => {
        if (guessedLetters.includes(letter)) return;
        setGuessedLetters((currentLetters) => [...currentLetters, letter]);
      },
      [guessedLetters]
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter));

  const [counter, setCounter] = useState<number>(0)
  const [numberGames, setNumberGames] = useState<number>(0)


  useEffect(() => {
    if (isWinner) {
      setCounter( counter + 1);
    }
  }, [isWinner])

    useEffect(() => {
        if (isWinner || isLoser) {
            setNumberGames( numberGames + 1);
        }
    }, [isWinner, isLoser])


  const resetGame = () => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)])
    setGuessedLetters([])
  }

  return (
      <div
          style={{
            maxWidth: "600px",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            margin: "0 auto",
            alignItems: "center",
            fontFamily: "monospace",
          }}
      >
          {numberGames === 0 ? <h4 style={{marginBottom: "0"}}>Score = 0</h4> :
              <h4 style={{marginBottom: "0"}}>Score = {counter} / {numberGames}</h4>}
          <div style={{fontSize: "1.5rem", textAlign: "center" }}>
          {isWinner && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p>Well done! You won.</p>
                <button onClick={resetGame} className={styling.btn}>
                  Play Again
                </button>
              </div>
          )}

          {isLoser && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p>Unlucky! You lost.</p>
                <button onClick={resetGame} className={styling.btn}>
                  Play Again
                </button>
              </div>
          )}
        </div>

        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser} />
        <div style={{ alignSelf: "stretch" }}>
          <Keyboard
              disableKeys={isWinner || isLoser}
              activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
              addGuessedLetter={addGuessedLetter}
              inactiveLetters={incorrectLetters}
          />
        </div>
      </div>
  );
}

export default App;
