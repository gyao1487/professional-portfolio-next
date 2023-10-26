import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "ff8d1e6f-b047-4278-99e6-ea92bc076c47",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setName("");
      setEmail("");
      setMessage("");
      alert(
        "Thank you for your message! Looking forward to connecting!"
      );
    }
  };

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       access_key: "ff8d1e6f-b047-4278-99e6-ea92bc076c47",
  //       name: e.target.name.value,
  //       email: e.target.email.value,
  //       message: e.target.message.value,
  //     }),
  //   });
  //   const result = await response.json();
  //   if (result.success) {
  //     console.log(result);
  //     console.log("Success!");
  //   }
  // }

  return (
    <div className="bg-lessDark p-6">
      <form onSubmit={handleSubmit}>
        <div className="relative mb-6">
          <label htmlFor="name" className="text-light">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className=" min-h-[auto] w-full py-[0.30rem] px-3 focus:border-red bg-light"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative mb-6">
          <label htmlFor="email" className="text-light">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="email@example.com"
            className="min-h-[auto] w-full py-[0.30rem] px-3 focus:border-red bg-light"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-6">
          <label htmlFor="message" className="text-light">
            Message
          </label>
          <textarea
            name="message"
            required
            rows="3"
            placeholder="Enter Message"
            className=" min-h-[auto] w-full py-[0.30rem] px-3 bg-light"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-transparent hover:bg-blue text-light hover:text-dark py-2 px-4 border hover:border-transparent rounded"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
