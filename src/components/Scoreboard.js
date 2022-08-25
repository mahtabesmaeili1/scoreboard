import { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Matias", score: 10 },
    { id: 2, name: "Swen", score: 13 },
    { id: 3, name: "Maria", score: 40 },
  ]);

  const newPlayer = (name) => {
    const newGuy = {
      id: players.length + 1,
      name: name,
      score: 0,
    };

    const newArray = [...players, newGuy];

    setPlayers(newArray);
  };

  const addOnePoint = (clickedId) => {
    // we are going to use to increase the score.

    // Obj: +1 on the score of the id guy
    // players array => original
    // an id

    const updatedPlayers = players.map((p) => {
      if (p.id === clickedId) {
        return { ...p, score: p.score + 1 }; // { id: 2, name: "Swen", score: 13 }
      } else {
        return p;
      }
    });

    setPlayers(updatedPlayers);
  };

  const sortedPlayers = [...players].sort((p1, p2) => p2.score - p1.score);

  return (
    <div>
      <h1>Scoreboard!</h1>
      <AddPlayerForm newPlayer={newPlayer} />
      {sortedPlayers.map((p) => (
        <div key={p.id}>
          <Player
            id={p.id}
            name={p.name}
            score={p.score}
            increase={addOnePoint}
          />
        </div>
      ))}
    </div>
  );
};

export default Scoreboard;
