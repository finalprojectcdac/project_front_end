import React, {useState} from 'react';
import cardRbar from "../general-components/cardRTbar";


function RtdBar(props) {

    const totalNoOfItems = props.totalNoOfItems;
    const totalItemValue = props.totalItemValue;
    const today = new Date().toLocaleDateString();
    const now = new Date().toLocaleTimeString();

    const [date, setDate] = useState(today);
    const [time, setTime] = useState(now);

    function updateRtdBar() {
      const newDate = new Date().toLocaleDateString();
      const newTime = new Date().toLocaleTimeString();
      setDate(newDate);
      setTime(newTime);
    }

    setInterval(updateRtdBar,1000);

    return (
        <div className="row rtdBar" >
            {/* <h6>
                {today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()}
            </h6> */}
            {/* <div className="col-auto"><cardRtbar /></div>
            <div className="col-auto"><cardRtbar /></div>
            <div className="col-auto"><cardRtbar /></div> style={{marginLeft:"-2%"}}*/}
           
  <div class="col-sm">
    <div class="card crd">
      <div class="card-body ">
        <h5 class="card-title text-center text-color fw-bold" style={{padding:"0px"}}>Total number of items</h5>
        <h4 class="card-text text-center" style={{padding:"0px"}}>{totalNoOfItems}</h4>
    
      </div>
    </div>
  </div>
  <div class="col-sm ">
    <div class="card crd">
      <div class="card-body ">
        <h5 class="card-title text-center text-color text-bold" style={{padding:"0px"}}>Total value of items</h5>
        <h4 class="card-text text-center" style={{padding:"0px"}}>{totalItemValue}</h4>
        
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card crd">
      <div class="card-body">
        <h5 class="card-title text-center text-color fw-bold" style={{padding:"0px"}}>DATE</h5>
        <h4 class="card-text text-center" style={{padding:"0px"}}>{date}</h4>
        
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card crd">
      <div class="card-body">
        <h5 class="card-title text-center text-color fw-bold" style={{padding:"0px"}}>TIME</h5>
        <h4 class="card-text text-center" style={{padding:"0px"}}>{time}</h4>
        
      </div>
    </div>
  </div>
</div>
        
    );
}

export default RtdBar;