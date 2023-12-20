"use client"


export default function ContactForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    // Send the form data to your API route
    const response = await fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data); // Handle the response
  };

  return (
    <div className="page-content">
     <form onSubmit={handleSubmit}>
      <input type="text" id="name" name="name" required />
      <input type="email" id="email" name="email" required />
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Send</button>
    </form>
    </div>
   
  );
}