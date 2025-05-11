const setHexCode = (rating) => {
    // const num = Number(rating)
    switch (rating) {
      case 0:  return '#ffffff';
      case 1:  return "#ff0000";
      case 2:  return "#ff3300";
      case 3:  return "#ff6600";
      case 4:  return "#ff9900";
      case 5:  return "#ffcc00";
      case 6:  return "#ccff00";
      case 7:  return "#99ff00";
      case 8:  return "#66ff00";
      case 9:  return "#33ff00";
      case 10: return "#00ff00";
      default: return "#ffffff"; 
    }
  };
  
export default setHexCode;
  