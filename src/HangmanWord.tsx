type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}
const HangmanWord = ({guessedLetters, wordToGuess, reveal}: HangmanWordProps) => {
    return (
        <div style={{display: "flex", gap: "2rem", fontSize: "4rem", fontWeight: "bold", textTransform: "uppercase"}}>
            {wordToGuess.split("").map((letter, index) => {
                return (
                    <span style={{borderBottom: ".1em solid black"}} key={index}>
                        <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden", color: !guessedLetters.includes(letter) && reveal ? "red" : "green"}}>{letter}</span>
                    </span>
                )})}
        </div>
    )
}
export default HangmanWord