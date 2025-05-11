import { useState } from "react"
import Popup from "./Popup"
import setHexCode from "../util/SetHexCode"
import  "./styles/Month.css"

const Block = ({date}) => {
    const [color,setColor] = useState('')
    const [showPopup,setShowPopup] = useState(false)
    const [rating,setRating] = useState(0)
    // const [info,setInfo] = useState({})
    
    const handleClick = () =>{
        setShowPopup(true)
    }

    const addRating = (event) => {
        event.preventDefault()
        setShowPopup(false)
        setColor(setHexCode(rating))
    }

    const blockStyle = () => {
        return {
            backgroundColor: color,
            border: "1px solid black",
            height: "2rem",
            width: "2rem"
        }
    }
    
    return (
        <div className="Block">
            <label htmlFor='rating'>{date}</label>
            <div onClick={handleClick} style={blockStyle()}></div>
            <Popup show = {showPopup} onClose={() => setShowPopup(false)}>
                <form onSubmit={addRating}>
                    <p>{date}</p>
                    <input type="text" name="" id="" />
                    <input id='rating' required type="number" value={rating} onChange={(e) =>setRating(Number(e.target.value))} />
                    <button type="submit">Save</button>
                </form>            
            </Popup>
        </div>
    )
}


export default Block