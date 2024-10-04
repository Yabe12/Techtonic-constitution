const Contact = () => {
    return (
      <section className="min-h-screen p-10 bg-yellow-100">
        <h2 className="text-3xl font-semibold">Contact Me</h2>
        <form className="mt-4 space-y-4">
          <input className="w-full p-2 border" type="text" placeholder="Name" />
          <input className="w-full p-2 border" type="email" placeholder="Email" />
          <textarea className="w-full p-2 border" placeholder="Your message"></textarea>
          <button className="p-2 bg-blue-500 text-white">Send</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  