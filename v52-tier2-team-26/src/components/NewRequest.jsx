import { useRequest } from "../contexts/RequestsContext";
import { useState } from "react";
import fetchAddresses from "../data/addresses";

const NewRequest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("");

  const { addRequest } = useRequest();

  fetchAddresses();

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    addRequest(name, email, phone, address, time);
  };

  return (
    <div>
      <form onSubmit={handleRequestSubmit}>
        <label>Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Phone:</label>
        <input
          id="phone"
          type="text"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label>Address:</label>
        <input
          id="address"
          type="text"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewRequest;
