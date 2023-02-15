

import { useState } from "react";
import "./styles.css";

let carObj = [
  {
    id: 1,
    name: "Maruthi",
    engine: "Disel",
    seater: 4
  },
  {
    id: 2,
    name: "Tata",
    engine: "Petrol",
    seater: 4
  }
];

carObj.sort((car1, car2) => {
  return car2.id - car1.id;
});

const formData = [
  {
    name: "text1",
    type: "phone",
    value: "",
    label: "TextBox1",
    regix: 'regix',
  },
  {
    name: "text2",
    type: "textbox",
    value: "",
    label: "TextBox2"
  },
  {
    name: "text3",
    type: "textbox",
    value: "",
    label: "TextBox3"
  }
];

export default function App() {
  const [form, setForm] = useState(formData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    const newForm = form.map((item) => {
      if (item.name === name) {
        if (item.type === "phone" && (value.length >= 10)) {
          alert('Phone number is not valid');
        }
        return { ...item, value: value };
      } else {
        return { ...item };
      }
    });
    console.log("form....", newForm);
    setForm(newForm);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* <table class="table">
        <thead class="thead">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Engine</th>
            <th>Seater</th>
          </tr>
        </thead>
        <tbody class="tbody">
          {
            carObj.map((car) => {
              return (
                <tr class="tbody-tr">
                  <td>{ car.id} </td>
                  <td>{ car.name} </td>
                  <td>{ car.engine} </td>
                  <td>{ car.seater} </td>
                </tr>
              )
            })
          }
        </tbody>
      </table> */}

      <form class="form-container">
        {form.map((formItem) => {
          return (
            <div class="form-item">
              <label>{formItem.label}</label>
              <input
                type={formItem.type}
                name={formItem.name}
                value={formItem.value}
                onChange={handleChange}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}
