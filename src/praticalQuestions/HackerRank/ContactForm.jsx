import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("All fields are required!");
      setSubmittedData([]);
      return;
    }
    setError("");
    setSubmittedData([...submittedData, { name, email, message }]);

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
      <div className="my-6  bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          ContactForm
        </h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="text-gray-500 mb-4">
            <label className="block mb-1">Name: </label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
            />
          </div>
          <div className="text-gray-500 mb-4">
            <label className="block mb-1">Email: </label>

            <input
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
            />
          </div>
          <div className="text-gray-500 mb-4">
            <label className="block mb-1">Message: </label>

            <input
              type="text"
              placeholder="Enter Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
            />
          </div>
          <div className="w-full text-center text-white bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            <button type="submit">Submit</button>
          </div>
        </form>

        {/* error message */}
        {error && <p className="text-red-500 mt-6 text-center">{error}</p>}

        {/* submitted data */}
        {submittedData.map((data, idx) => (
          <div key={idx} className="bg-gray-300 border rounded-lg p-4 mb-2 mt-4">
            <h3>Submitted Information:</h3>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Message: {data.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactForm;
