import React from "react";

function Keypad() {
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <div>
      <form>
        <input type="password" onChange={handleChange} />
      </form>
    </div>
  );
}

export default Keypad;
