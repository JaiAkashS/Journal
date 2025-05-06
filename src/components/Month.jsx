import Block from "./Block"

const Month = ({monthName , monthNum , noOfDays, year}) => {

    
const newDate = (idx) => {
    const date = new Date(2025,monthNum,1) + idx
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    return formattedDate
}





    return(
        <div className="">
            {Array.from({length:noOfDays},(_,item) => {<Block key ={item} date = {newDate(item)} /> })}
        </div>
    )
}