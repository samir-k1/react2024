import  { useState } from "react";

function PasswordGenerator() {
  // State to hold the generated password
  const [password, setPassword] = useState("");

  // State to manage checkbox selections
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  // Function to generate a random password
  const generatePassword = () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+~|}{[]:;?><,./-=";

    // Start with alphabets
    let possibleChars = characters;

    // Add numbers if the checkbox is checked
    if (includeNumbers) {
      possibleChars += numbers;
    }

    // Add special characters if the checkbox is checked
    if (includeSpecialChars) {
      possibleChars += specialChars;
    }

    // Generate the password
    let generatedPassword = "";
    for (let i = 0; i < 8; i++) {
      generatedPassword += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }

    // Update the state with the generated password
    setPassword(generatedPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="mb-4 text-2xl font-bold">Generated Password:</div>
      <input
        type="text"
        value={password}
        readOnly
        className="text-center p-2 mb-4 border rounded"
      />
      <div className="flex mb-4 text-blue-100">
        <label className="mr-4 text-blue-100">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
            className="mr-2"
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            className="mr-2 text-black"
          />
          Include Special Characters
        </label>
      </div>
      <button
        onClick={generatePassword}
        className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
      >
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
