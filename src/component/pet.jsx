import { useEffect, useState } from "react";

const Pet = ({ pet }) => {
  let [waiting, setWaiting] = useState(false);
  let [newValue, setNewValue] = useState(false);

  let myPostFetch = async (data) => {
    setWaiting(true);
    let response = await fetch("/api/pets", {
      method: "POST",
      headers: {
        "Content-Type": "appliccation/json",
      },
      body: JSON.stringify(data),
    });
    let responseData = await response.json();
    setWaiting(false);
  };

  let statusHandler = (name, status) => {
    console.log(status);
    if (status) {
      status = false;
    } else if (!status) {
      status = true;
    }

    let toSend = {
      name: name,
      isVaccinated: status,
    };
    setNewValue(status);
    myPostFetch(toSend);
  };

  useEffect(() => {
    setNewValue(pet.isVaccinated);
  }, [pet.isVaccinated]);

  return (
    <div>
      <div>Name: {pet.name}</div>
      <div>Animal: {pet.animal}</div>
      <div>Vaccinated: {waiting ? "..." : `${newValue}`}</div>
      <button onClick={() => statusHandler(pet.name, newValue)}>
        Change Status
      </button>
    </div>
  );
};

export default Pet;