import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const TemperatureConverter = () => {
  const [switcher, setswitcher] = useState(true);
  const [cels, setCels] = useState(0);

  const changeCels = (e) => {
    setCels((cels) => e.target.value);
  };

  const ChangSwitch = () => {
    setswitcher((switcher) => !switcher);
  };
  return (
    <div>
      <TextField
        label={switcher ? "Температура цельсия" : "Температура фарингейт"}
        variant="outlined"
        onChange={changeCels}
        value={cels}
      />

      <TextField
        id="outlined-basic"
        label={switcher ? "Температура фарингейт" : "Температура цельсия"}
        variant="outlined"
        value={switcher ? `${cels * 33.8}` : `${cels / 33.8}`}
      />

      <Button variant="outlined" onClick={ChangSwitch}>
        {switcher ? "Фарингейт => Цельсия" : "Цельсия => Фарингейт"}
      </Button>
    </div>
  );
};
