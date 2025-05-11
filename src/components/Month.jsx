import { useState, useEffect } from "react";
import Block from "./Block";
import "./styles/Year.css"

const Month = ({ monthName, monthNum, noOfDays, year }) => {
    const [dates, setDates] = useState([]);

    useEffect(() => {
        let tempDates = [];
        let date = new Date(year, monthNum, 1);

        for (let i = 0; i < noOfDays; i++) {
            let day = date.getDate();
            let month = date.getMonth() + 1; // Month is 0-indexed
            let formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
            tempDates.push(formattedDate);

            // Move to next day
            date.setDate(date.getDate() + 1);
        }

        setDates(tempDates);
    }, [monthNum, noOfDays, year]);

    return (
        <div className="Month-Container">
        <h1>{monthName}</h1>
        <div className="ParentDiv">
                {dates.map((d, idx) => (
                    <Block key={idx} date={d} />
                ))}
        </div>
        </div>    
    );
};

export default Month;
