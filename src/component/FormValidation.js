import { Button, TextField } from "@mui/material";
import React , {useState} from "react";

const FormValidation = () => {
  const initialData = { name: "", email: "", address: "" };

  const [sampleData, setSampleData] = useState(initialData);

  const handleOnChange = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setSampleData({
      ...sampleData,
      [name]: value,
    });

    
  };


  const handleSubmit=(e)=>{

  }

  return (
    <>
      <div>FormValidation</div>

      <TextField
        variant="outlined"
        label="Name"
        name="name"
        value={sampleData?.name}
        onChange={handleOnChange}
        
        
      />
      <TextField
        variant="outlined"
        label="Email"
        name="email"
        value={sampleData?.email}
        onChange={handleOnChange}
      />
      <TextField
        variant="outlined"
        label="Address"
        name="address"
        value={sampleData?.address}
        onChange={handleOnChange}
      />

      <Button>Submit</Button>
    </>
  );
};

export default FormValidation;
