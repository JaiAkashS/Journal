import Block from "./Block";
import 'C:\\Users\\Tharun\\Documents\\CodingStuff\\dayBlocks\\Year.css';

    
const Year = () =>{
    return (
        <div className="ParentDiv">
            {Array.from({ length: 365 }, (_, index) => (
                <Block key={index} />
            ))}
        </div>
    )
}


export default Year