// ContactForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://formspree.io/f/mnqenlbp', formData);
      // Replace 'your-form-id' with the actual Formspree form ID
      setSubmitStatus({ type: 'success', message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Error submitting form. Please try again later.' });
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-blue-900 rounded-md shadow-md flex flex-col">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Message Frank</h2>
      {submitStatus && (
        <div
          className={`mb-4 ${
            submitStatus.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white px-4 py-2 rounded-md text-center`}
        >
          {submitStatus.message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2 text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-black"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-white font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={formData.message}
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
