import { useState } from "react"
import Popup from "./Popup"
import setHexCode from "../util/SetHexCode"

const Block = ({date}) => {
    const [color,setColor] = useState('')
    const [showPopup,setShowPopup] = useState(false)
    const [rating,setRating] = useState(0)
    
    
    const handleClick = () =>{
        setShowPopup(true)
    }

    const addRating = (event) => {
        event.preventDefault()
        setShowPopup(false)
        console.log("Rating" , rating)
        console.log(setHexCode(rating.valueOf()))
        setColor(setHexCode(rating))
    }

    const blockStyle = () => {
        return {
            backgroundColor: color,
            border: "1px solid black",
            height: "10px",
            width: "10px"
        }
    }
    
    return (
        <>
            <div onClick={handleClick} style={blockStyle()}></div>
            <Popup show = {showPopup} onClose={() => setShowPopup(false)}>
                <form onSubmit={addRating}>
                    <input type="text" name="" id="" />
                    <input type="number" value={rating} onChange={(e) =>setRating(Number(e.target.value))} />
                    <button type="submit">Save</button>
                </form>            
            </Popup>
        </>
    )
}


export default Block