import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handleClick (){
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";

  return <button onClick={handleClick} style={{backgroundColor: color}}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;

// The button should say "OFF" when it is first displayed
// When the button is clicked, it should say "ON"
// When the button is clicked again, it should say "OFF"
// etc