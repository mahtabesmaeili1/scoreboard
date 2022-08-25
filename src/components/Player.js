import { useState } from "react";

const Player = (props) => {
  console.log("RE_RENDER!!!", props.name, props);
  return (
    <div>
      <h2>
        Name: {props.name}. Score: {props.score}
      </h2>
      <button onClick={() => props.increase(props.id)}>+</button>
    </div>
  );
};

export default Player;
