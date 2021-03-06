import React from "react";
import Home from "./Home";

function YearlyProduce(props){
  return(
    <React.Fragment>
      <div id="yearlyProduce">
        <h3>2022 Monthly Produce Schedule</h3>
        <div id="yProduce">
        {props.availableProduce.map((e,index2)=>{
          return(
          <div key={index2+"div"}>
            <h3>{e.month}</h3>
            {e.selection.map((s,index)=>
              <li key={index+"unique"}>{s}</li>
            )}
          </div>
          )
        })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default YearlyProduce;



