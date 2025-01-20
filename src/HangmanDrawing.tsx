type HangmanDrawingProps = {
    numberOfGuesses: number
}
const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {

        const Head = (
            <div style={{width: "50px", height: "50px", borderRadius: "100%", border: "10px solid black", position: "absolute", top: "50px", right: "-30px"}}/>
        )

        const Body = (
            <div style={{width: "10px", height: "100px", background: "black", position: "absolute", top: "120px", right: "0"}}/>
        )

        const rightArm = (
            <div style={{width: "90px", height: "10px", background: "black", position: "absolute", top: "150px", right: "-90px", rotate: "-30deg", transformOrigin: "left bottom"}}/>
        )

        const leftArm = (
            <div style={{width: "90px", height: "10px", background: "black", position: "absolute", top: "150px", right: "10px", rotate: "30deg", transformOrigin: "right bottom"}}/>
        )

        const rightLeg = (
            <div style={{width: "90px", height: "10px", background: "black", position: "absolute", top: "210px", right: "-80px", rotate: "60deg", transformOrigin: "left bottom"}}/>
        )

        const leftLeg = (
            <div style={{width: "90px", height: "10px", background: "black", position: "absolute", top: "210px", right: "0", rotate: "-60deg", transformOrigin: "right bottom"}}/>
        )

        const bodyParts = [Head, Body, leftArm, rightArm, leftLeg, rightLeg]

return (
    <div style={{position: "relative", marginRight: "3rem"}}>
        {bodyParts.slice(0, numberOfGuesses)}
            <div style={{height: "50px", width: "10px", background: "black", top: "0", right: "0", position: "absolute"}}/>
            <div style={{height: "10px", width: "200px", background: "black", marginLeft: "100px"}}/>
            <div style={{height: "300px", width: "10px", background: "black", marginLeft: "100px"}}/>
            <div style={{height: "10px", width: "200px", background: "black"}}/>
    </div>
)
}
export default HangmanDrawing