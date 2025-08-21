import { useState, useEffect, useMemo } from "react";
import Block from "./Block";
import "./styles/Month.css"

const Month = ({ monthName, monthNum, noOfDays, year }) => {
    const [dates, setDates] = useState([]);
    const tempDates = useMemo(()=>{
            let tempDate = []
            let date = new Date(year,monthNum,1)
            for(let i = 0;i<noOfDays;i++){
                tempDate.push(date.toDateString())
                date.setDate(date.getDate()+1)
            }
            setDates(tempDate)
            return tempDate;
        },[monthName, monthNum, noOfDays, year ])

    return (
        <div className="Month-Container">
            <h1>{monthName}</h1>
            <div className="ParentDiv">
                {dates.map((d, idx) => (
                    <Block className="Block" key={idx} date={d} />
                ))}
            </div>
        </div>    
    );
};

export default Month;
