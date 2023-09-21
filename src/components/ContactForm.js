import React from "react";

const ContactForm = () => {
  async function handleSubmit(e) {
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
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-6">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className=" min-h-[auto] w-full py-[0.30rem] px-3"
          />
        </div>
        <div className="relative mb-6">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="email@example.com"
            className="min-h-[auto] w-full py-[0.30rem] px-3 focus:border-red"
          />
        </div>
        <div className="relative mb-6">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            rows="3"
            placeholder="Enter Message"
            className=" min-h-[auto] w-full py-[0.30rem] px-3 "
          ></textarea>
        </div>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default ContactForm;
