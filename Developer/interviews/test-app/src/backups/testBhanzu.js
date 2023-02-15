
// .optionContainer {
//     background-color: black;
//     color: white;
//     width: 136px;
//     margin-left: 238px;
//     margin-top: 1px;
//     list-style-type: none;
//     padding: 5px;
//   }
  
//   .option {
//     margin: 10px;
//     width: 100%;
//     height: 20px;
//     text-align: center;
//   }
  
//   .option:hover {
//     background-color: lightgrey;
//   }



import { useState } from "react";
import "./styles.css";

const data = ["Angular", "React", "Vue", "JS", "Java", "Node"];

export default function App() {
  const [val, setVal] = useState("");
  const [options, setOptions] = useState(data);

  const onChangeInput = (event) => {
    const { value } = event.target;
    setVal(value);
    if (!value) {
      setOptions(data);
    } else {
      setOptions(data.filter((option) => option === value));
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <input onChange={onChangeInput} value={val} />
      <div className="optionContainer">
        {options.map((option) => (
          <li className="option">{option}</li>
        ))}
      </div>
    </div>
  );
}
