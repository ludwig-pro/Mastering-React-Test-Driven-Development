import React, { useState } from 'react';

export const CustomerForm = ({ firstName, onSubmit }) => {
  const [customer, setCustomer] = useState({ firstName });

  const handleChangeFirstName = ({ target: { value } }) => {
    setCustomer({ firstName: value });
  };

  return (
    <form id="customer" onSubmit={() => onSubmit(customer)}>
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={firstName}
        onChange={handleChangeFirstName}
      />
    </form>
  );
};
