import React, { useState } from 'react';
import { Select, MenuItem, Checkbox, ListItemText, FormControl, InputLabel } from '@mui/material';


const MultiSelectDropdown = () => {
  const auditor_dict = [
    { values: "U8", labels: "Pranjal" },
    { values: "U9", labels: "Vignesh Vellan" },
  ];

  const auditorList = [
    { values: 1, labels: "Aurore" },
    { values: 2, labels: "Jasmin" },
    { values: 3, labels: "Willabella" },
    { values: 4, labels: "Maybelle" },
    { values: 5, labels: "Dottie" },
    { values: 6, labels: "Bambie" },
    { values: 7, labels: "Shara" },
    { values: "U8", labels: "Pranjal" },
    { values: "U9", labels: "Vignesh Vellan" },
  ];

  const [selectedAuditors, setSelectedAuditors] = useState(auditor_dict.map(auditor => auditor.values));

  const handleAuditorChange = (event) => {
    setSelectedAuditors(event.target.value);
  };

  const handleCheckboxChange = (value) => {
    const index = selectedAuditors.indexOf(value);
    if (index === -1) {
      setSelectedAuditors([...selectedAuditors, value]);
    } else {
      const updatedSelection = [...selectedAuditors];
      updatedSelection.splice(index, 1);
      setSelectedAuditors(updatedSelection);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="auditor-dropdown-label">Select Auditors</InputLabel>
      <Select
        labelId="auditor-dropdown-label"
        id="auditor-dropdown"
        multiple
        value={selectedAuditors}
        onChange={handleAuditorChange}
        renderValue={(selected) => selected.join(', ')}
      >
        {auditorList.map((auditor) => (
          <MenuItem key={auditor.values} value={auditor.values}>
            <Checkbox
              checked={selectedAuditors.indexOf(auditor.values) > -1}
              onChange={() => handleCheckboxChange(auditor.values)}
            />
            <ListItemText primary={auditor.labels} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
  
};

export default MultiSelectDropdown;
