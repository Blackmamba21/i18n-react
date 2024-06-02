import React, { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let charString = "";
  let generatedPassword = "";

  const generatePassword = (checkBoxData, length) => {
    console.log("checkBoxData", checkBoxData, length);

    let selectedOptions = checkBoxData.filter((item) => item.state);
    if (selectedOptions.length === 0) {
      setError("Please select at least one option");
      setPassword("");
      return;
    }

    selectedOptions.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase Latters":
          charString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase Latters":
          charString += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charString += "0123456789";
          break;
        case "Include Symbols":
          charString += "!@#$%^&*()_+-=[]{}|;':,.<>?/`~";
          break;
        default:
          break;
      }
    });
    console.log("charString", charString);
    for (let index = 0; index < length; index++) {
      const randomIndex = Math.floor(Math.random() * charString.length);
      console.log("🚀 ~ generatePassword ~ randomIndex:", randomIndex);

      console.log("CHAMO====", charString[randomIndex]);
      generatedPassword += charString[randomIndex];
    }
    setPassword(generatedPassword);
    console.log("selectedOptions==", selectedOptions);
  };
  console.log("passwordChanged", password);
  return { password, error, generatePassword };
};

export default usePasswordGenerator;
