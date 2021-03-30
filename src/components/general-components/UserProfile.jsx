import React from "react";

function UserProfile() {
  return (
    <div
      style={{
        fontFamily: "Merriweather",
      }}
    >
      <img
        style={{
          position: "absolute",
          width: "60px",
          height: "40px",
          top: "19px",
        }}
        src="https://devtalk.blender.org/uploads/default/optimized/2X/c/cbd0b1a6345a44b58dda0f6a355eb39ce4e8a56a_2_690x460.png"
        alt=""
      />
      <p
        style={{
          position: "absolute",
          padding: "5px",
          top: "22px",
          left: "55px",
          width: "max-content",
        }}
      >
        {localStorage.getItem("user")}
      </p>
    </div>
  );
}

export default UserProfile;
