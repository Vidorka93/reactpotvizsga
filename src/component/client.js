import React, { useState } from "react";

const Client = ({ client }) => {
  return (
    <div>
      <h2>{client.pets[0].name}</h2>

      <h3>IsVaccinated:</h3>
      <button>{client.pets[0].animal}</button>
    </div>
  );
};

export default Client;
