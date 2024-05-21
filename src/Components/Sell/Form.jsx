import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import CatchAsyncError from "../../utils/CatchAsyncError";
import axios from "axios";
import Swal from "sweetalert2";
function PropertyForm() {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    address: "",
    area: "",
    landmark: "",
    optionsBhk: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        optionsBhk: checked ? name : "",
      });
    } else if (type === "file") {
      setFormData({
        ...formData,
        images: Array.from(files),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = CatchAsyncError(async (e) => {
    e.preventDefault();
    // setFormData((e) => {
    //   const phoneNumber = localStorage.getItem("phoneNumber");
    //   console.log({ ...e, phoneNumber });
    //   const temp = { ...e, phoneNumber };
    //   return temp;
    // });
    const ownerNumber = localStorage.getItem("phoneNumber");
    const temp = { ...formData, ownerNumber };
    const data = await axios.post("https://rainbow-sunflower-70fdd9.netlify.app/api/http://localhost:8000/api/property", temp);
    console.log(data);
    setFormData({
      phoneNumber: "",
      address: "",
      area: "",
      landmark: "",
      optionsBhk: "",
    });
    
    Swal.fire({
      title: "Property data has been submitted",
    });
    // Handle form submission here, e.g., send data to server
  });

  return (
    <Container>
      <h1 className="my-4">Property Details Form</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formArea">
          <Form.Label>Area (in sqft)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter area"
            name="area"
            value={formData.area}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formLandmark">
          <Form.Label>Landmark</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBHK">
          <Form.Label>BHK Options</Form.Label>
          {["1BHK", "2BHK", "3BHK", "4BHK"].map((bhk) => (
            <Form.Check
              key={bhk}
              type="checkbox"
              label={bhk}
              name={bhk}
              checked={formData.optionsBhk === bhk}
              onChange={handleChange}
            />
          ))}
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default PropertyForm;
