import React, { useState } from "react";

const FormPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Age: ${age}, Weight: ${weight}, Height: ${height}`);
  };

  return (
   <>
   <div>
    <div>
    <label>Name:</label>
    <input type="text" />
    </div>
    <div>
    <label>Age:</label>
    <input type="number" />
    </div>
    <div>
    <label>Weight:</label>
    <input type="number" />
    </div>
    <div>
    <label>Height:</label>
    <input type="number" />
    </div>
    <div>
    <button type="submit">Submit</button>
    </div>
   </div>
   </>
  );
};

export default FormPage;
