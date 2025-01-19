import styling from "./Keyboard.module.css"

type KeyboardProps = {
    addGuessedLetter: (letter: string) => void, activeLetters: string[], inactiveLetters: string[], disableKeys?: boolean
}
const Keyboard = ({addGuessedLetter, activeLetters, inactiveLetters, disableKeys = false}: KeyboardProps) => {
    const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return (
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: "0.5rem"}}>
            {keys.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button onClick={() => addGuessedLetter(key)}
                            className={`${styling.btn} ${isActive ? styling.active : ""} ${isInactive ? styling.inactive : ""}`} disabled={isInactive || isActive || disableKeys}>
                        {key}
                    </button>
                )
            })}
        </div>
    )
}
export default Keyboard