import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Cad } from "./Cad";
import { useState } from "react";
import "./Style.css";
import { ClassNames } from "@emotion/react";
export const TodoList = () => {
  const [titel, setTitel] = useState("");
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);

  const upTitel = (e) => {
    setTitel(e.target.value);
    console.log(titel);
  };
  const upText = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const addTask = (e) => {
    const newArray = [...task, { titel, text, id: crypto.randomUUID() }];
    setTask(newArray);
    setTitel("");
    setText("");
    console.log(task);
  };

  const deletTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
  };

  return (
    <div className="conteiner">
      <TextField
        id="outlined-basic"
        label="Тема"
        variant="outlined"
        onChange={upTitel}
      />
      <TextField
        id="outlined-basic"
        label="Задача"
        variant="outlined"
        onChange={upText}
      />
      <br></br>
      <Button variant="contained" onClick={addTask}>
        Добавть задачу
      </Button>
      {task.map((card) => (
        <div className="box">
          <Cad key={card.id} titel={card.titel} text={card.text} />
          <Button variant="contained" onClick={() => deletTask(card.id)}>
            Удалить задачу
          </Button>
        </div>
      ))}
    </div>
  );
};
