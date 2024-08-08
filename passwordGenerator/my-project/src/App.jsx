import { useState } from "react";

function PasswordGenerator() {
  // State to hold the generated password
  const [password, setPassword] = useState("");

  // Function to generate a random password
  const generatePassword = () => {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+~|}{[]:;?><,./-=";
    
    // Combine all possible characters
    const allChars = characters + numbers + specialChars;

    // Ensure password contains at least one character from each category
    const passwordArray = [
      characters[Math.floor(Math.random() * characters.length)],
      numbers[Math.floor(Math.random() * numbers.length)],
      specialChars[Math.floor(Math.random() * specialChars.length)],
    ];

    // Fill the remaining length of the password
    for (let i = passwordArray.length; i < 8; i++) {
      passwordArray.push(allChars[Math.floor(Math.random() * allChars.length)]);
    }

    // Shuffle the array to ensure randomness
    passwordArray.sort(() => Math.random() - 0.5);

    // Join the array into a string and update the state
    setPassword(passwordArray.join(""));
  };

  return (

    
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mb-4 text-2xl font-bold">Generated Password:</div>
      <input
        type="text"
        value={password}
        readOnly
        className="text-center p-2 mb-4 border rounded"
      />
      <button
        onClick={generatePassword}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
