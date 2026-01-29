import {contactAction} from "./contact.action"
const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800">Contact Us</h1>
        <p className="text-center text-gray-600">We'd love to hear from you!</p>
        
        <form className="space-y-4" action={contactAction}>
          <div className="flex flex-col space-y-1">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="fullName" 
              placeholder="Your Name" 
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
            />
          </div>
          
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="your@email.com" 
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
            />
          </div>
          
          <div className="flex flex-col space-y-1">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              placeholder="Write your message here..." 
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
