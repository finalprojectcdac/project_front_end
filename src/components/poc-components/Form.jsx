import React, { useState } from "react";
const a = [];
function Form() {
  const [details, setDetails] = useState({
    ////hook
    name: "",
    mobile: "",
    city: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setDetails((prevValue) => {
      ///
      if (name === "name") {
        return {
          name: value,
          mobile: prevValue.mobile,
          city: prevValue.city,
        };
      } else if (name === "mobile") {
        return {
          name: prevValue.name,
          mobile: value,
          city: prevValue.city,
        };
      } else if (name === "city") {
        return {
          name: prevValue.name,
          mobile: prevValue.mobile,
          city: value,
        };
      }
    });
  }

  function handlesubmit(event) {
    a.push(details);
    //console.log(a);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder=" your name"
          name="name"
          onChange={handleChange}
          value={details.name}
        ></input>
        <input
          type="text"
          placeholder=" your  mobile no"
          name="mobile"
          onChange={handleChange}
          value={details.mobile}
        ></input>
        <input
          type="text"
          placeholder=" your city"
          name="city"
          onChange={handleChange}
          value={details.city}
        ></input>
        <button type="submit">submit</button>
      </form>
      table
    </div>
  );
}

export default Form;
export { a };
