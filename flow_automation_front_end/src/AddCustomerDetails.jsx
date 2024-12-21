// src/AddCustomerDetails.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCustomerDetails = () => {
  const [customerDetails, setCustomerDetails] = useState({
    individualId: '',
    customerBillSpecId: '',
    customerAddressId: '',
    customerAccountId: '',
    name: '',
    ID: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/add_customer', {
        CreateCustomerResponse: customerDetails
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Customer Details</h2>
      <label>
        Individual ID:
        <input type="text" name="individualId" value={customerDetails.individualId} onChange={handleChange} required />
      </label>
      <label>
        Customer Bill Spec ID:
        <input type="text" name="customerBillSpecId" value={customerDetails.customerBillSpecId} onChange={handleChange} required />
      </label>
      <label>
        Customer Address ID:
        <input type="text" name="customerAddressId" value={customerDetails.customerAddressId} onChange={handleChange} required />
      </label>
      <label>
        Customer Account ID:
        <input type="text" name="customerAccountId" value={customerDetails.customerAccountId} onChange={handleChange} required />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={customerDetails.name} onChange={handleChange} required />
      </label>
      <label>
        ID:
        <input type="text" name="ID" value={customerDetails.ID} onChange={handleChange} required />
      </label>
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default AddCustomerDetails;