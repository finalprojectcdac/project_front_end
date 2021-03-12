import React, { useState } from 'react';
import cardRbar from "../general-components/cardRTbar";



function RtdBar() {
    var today = new Date();
    var c=2;
    var v=4;

    /*time and date*/
    const [time, setTime] = useState(now);
    const [no_item, setNoitem]=useState({
        no_of_item: c,
        value_of_item: v
    });


    setInterval(updateTime, 3000);
    setInterval(udateItem, 5000);

    var now = new Date().toLocaleTimeString();
   
    function updateTime() {
    var newTime = new Date().toLocaleTimeString();
     setTime(newTime);
    }

    /*this is for updating total number of item*/
    function udateItem(){
      setNoitem({
        no_of_item: Math.floor(Math.random() * Math.floor(100)),
        value_of_item: Math.floor(Math.random() * Math.floor(100000))
      })
    }
 

    return (
        <div className="row rtdBar">
            {/* <h6>
                {today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()}
            </h6> */}
            {/* <div className="col-auto"><cardRtbar /></div>
            <div className="col-auto"><cardRtbar /></div>
            <div className="col-auto"><cardRtbar /></div> */}
           
  <div class="col-sm ">
    <div class="card crd">
      <div class="card-body ">
        <h5 class="card-title text-center text-color fw-bold">Total number of item</h5>
        <h4 class="card-text text-center">{no_item.no_of_item}</h4>
    
      </div>
    </div>
  </div>
  <div class="col-sm ">
    <div class="card crd">
      <div class="card-body ">
        <h5 class="card-title text-center text-color text-bold">Total value of item</h5>
        <h4 class="card-text text-center">{no_item.value_of_item}</h4>
        
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card crd">
      <div class="card-body">
        <h5 class="card-title text-center text-color fw-bold">DATE</h5>
        <h4 class="card-text text-center">{today.getDay()+"/"+today.getMonth()+"/"+today.getFullYear()}</h4>
        
      </div>
    </div>
  </div>
  <div class="col-sm">
    <div class="card crd">
      <div class="card-body">
        <h5 class="card-title text-center text-color fw-bold">TIME</h5>
        <h4 class="card-text text-center">{time}</h4>
        
      </div>
    </div>
  </div>
</div>
        
    );
}

export default RtdBar;