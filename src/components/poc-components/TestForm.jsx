import userEvent from '@testing-library/user-event';
import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';
import user from '../../service/serviceLayer';

let a = [];
// {name:"vaibhav", mobile:"5733", city:"delhi"},{name:"askdghd;a", mobile:"353094", city:"up"},{name:"akfda;s", mobile:"873", city:"wb"}
function TestForm() {

    const [details, setDetails] = useState({
        name: "",
        mobile: "",
        city: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setDetails(prevValue => {
            if (name === "name") {
                return {
                    name: value,
                    mobile: prevValue.mobile,
                    city: prevValue.city
                };
            } else if (name === "mobile") {
                return {
                    name: prevValue.name,
                    mobile: value,
                    city: prevValue.city
                };
            } else if (name === "city") {
                return {
                    name: prevValue.name,
                    mobile: prevValue.mobile,
                    city: value
                };
            }
        });
    }

    function handleclick() { 
        a.push(details);
        console.log(a);
        return (
            ReactDOM.render(<Table />, document.getElementById('table'))
        );
    }

    function handleSave(){
        //user.putuser(a);
        user.getUsers().then(resp => {

            console.log(resp.data);
            console.log(resp.data[0]);
        });
    }
   

    return (<div>

        <input type="text" placeholder=" your name" name="name" onChange={handleChange} value={details.name} ></input>
        <input type="text" placeholder=" your  mobile no" name="mobile" onChange={handleChange} value={details.mobile} ></input>
        <input type="text" placeholder=" your city" name="city" onChange={handleChange} value={details.city} ></input>
        <button type="submit" onClick={handleclick}>submit</button>


        <button type="submit" onClick={handleSave}>save</button>


    </div>)


}

export default TestForm;
export {a};