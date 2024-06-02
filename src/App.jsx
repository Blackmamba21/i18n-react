import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./components/usePasswordGenerator";
function App() {
  const { password, error, generatePassword } = usePasswordGenerator();
  const [value, setValue] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include Uppercase Latters", state: false },
    { title: "Include Lowercase Latters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const changeInputValue = (event) => {
    setValue(event.target.value);
  };

  const handleCheckBox = (item, index) => {
    setCheckBoxData((prevCheckBoxData) => {
      let newData = [...prevCheckBoxData];
      newData[index] = {
        ...newData[index],
        state: !newData[index].state,
      };
      return newData;
    });
  };

  // console.log("checkBoxData", checkBoxData);
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          padding: "10px",
        }}
      >
        <p>{password}</p>
        <button className="btn-cls">Copy</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
          color: "white",
        }}
      >
        <p>Character Length</p>
        <p>{value}</p>
      </div>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          padding: "10px",
        }}
      >
        <input
          min={4}
          max={20}
          type={"range"}
          style={{
            width: "100%",
          }}
          value={value}
          onChange={changeInputValue}
        />
      </div>

      <div
        style={{
          display: "grid",
          justifyContent: "space-between",
          gridTemplateColumns: "repeat(2, 1fr)", // Creates 2 equal columns
          gap: "10px",
          padding: "10px", // Padding applied to the container
          alignItems: "center",
          justifyItems: "center",
          color: "white",
        }}
      >
        {checkBoxData.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%", // Each item takes full width
                // padding: "10px", // Padding applied to each item
              }}
            >
              <input
                type="checkbox"
                style={{ marginRight: "10px" }}
                onClick={() => handleCheckBox(item, index)}
              />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>

      {error ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 10,

            color: "red",
          }}
        >
          <p>{error}</p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 10,

            color: "white",
          }}
        >
          <p>Strength</p>
          <p>Medium</p>
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        <button
          className="gen-btn-cls"
          onClick={() => generatePassword(checkBoxData, value)}
        >
          GENERATE PASSWORD
        </button>
      </div>
    </div>
  );
}

export default App;
