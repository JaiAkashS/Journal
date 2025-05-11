import { useState } from "react"
import Popup from "./Popup"
import setHexCode from "../util/SetHexCode"

const Block = ({date}) => {
    const [color,setColor] = useState('')
    const [showPopup,setShowPopup] = useState(false)
    const [rating,setRating] = useState(null)
    // const [info,setInfo] = useState({})
    
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
            height: "20px",
            width: "20px"
        }
    }
    
    return (
        <>
            <div onClick={handleClick} style={blockStyle()}></div>
            <Popup show = {showPopup} onClose={() => setShowPopup(false)}>
                <form onSubmit={addRating}>
                    <p>{date}</p>
                    <input type="text" name="" id="" />
                    <input required type="number" value={rating} onChange={(e) =>setRating(Number(e.target.value))} />
                    <button type="submit">Save</button>
                </form>            
            </Popup>
        </>
    )
}


export default Block