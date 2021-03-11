import React from 'react';
import cardRbar from "../general-components/cardRTbar";


function RtdBar() {
    var today = new Date();
    var c="124";




    window.onload= function (){
        
        c="102541";
         
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
        <h4 class="card-text text-center">{c}</h4>
    
      </div>
    </div>
  </div>
  <div class="col-sm ">
    <div class="card crd">
      <div class="card-body ">
        <h5 class="card-title text-center text-color text-bold">Total value of item</h5>
        <h4 class="card-text text-center">24</h4>
        
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
        <h4 class="card-text text-center">{today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()}</h4>
        
      </div>
    </div>
  </div>
</div>
        
    );
}

export default RtdBar;