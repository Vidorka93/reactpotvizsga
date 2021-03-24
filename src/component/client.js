import React, { useState } from "react";
import Pet from "./pet";

const Client = ({ client }) => {
  return (
    <div>
      <h2>{client.name}</h2>
      <div>
        <h4>Pets:</h4>
        {client.pets.map((pet, key) => (
          <Pet key={key} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Client;
