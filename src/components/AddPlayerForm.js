import { useState } from "react";

const AddPlayerForm = (props) => {
  const [name, setName] = useState("");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onFormSubmit = (event) => {
    // prevent the default behaviour
    // don't refresh the page
    event.preventDefault();

    // call the prop function to send the player name up
    props.newPlayer(name);
  };

  return (
    <div>
      <h3>Form!</h3>
      <form onSubmit={(event) => onFormSubmit(event)}>
        <label>Name</label>
        <input onChange={onNameChange} value={name} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
