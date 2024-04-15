// "use client"
// import React, { useState, useEffect } from "react";

// async function SubmitForm(name, email, message) {
//   const formDatab = new FormData();
//   formDatab.append("Name", name);
//   formDatab.append("Email", email);
//   formDatab.append("Message", message);

//   try {
//     const response = await fetch(
//       "https://script.google.com/macros/s/AKfycbxo6ocEdt8l0tW1KaqdWK42gUPJrKfsDYLfXn4MewbDhytd8M2yhNGwovSiDyYk0yJm9A/exec",
//       {
//         method: "POST",
//         body: formDatab,
//       }
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Failed to submit form");
//   }
// }

// function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     const isSubmitted = localStorage.getItem("submitted");
//     if (isSubmitted === "true") {
//       setSubmitted(true);
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     localStorage.setItem("submitted", "true");

//     try {
//       await SubmitForm(name, email, message);
//       setName("");
//       setEmail("");
//       setMessage("");
//     } catch (error) {
//       console.error(error);
//       setSubmitted(false);
//       localStorage.removeItem("submitted");
//     }
//   };

//   return (
//     <div id="contactus" className="dark:bg-black bg-grid-small-white/[0.2] ">
//       <div className="max-w-md mx-auto p-8 rounded-lg  ">
//         <h1 className="text-3xl font-bold mb-4 md:ml-28">Contact Us</h1>

//         {submitted ? (
//           <p className="text-green-600">
//             Successfully submitted. We will reach out to you.
//           </p>
//         ) : (
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Your Name
//               </label>
//               <input
//                 id="name"
//                 name="Name"
//                 type="text"
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
//                 placeholder="Your Name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Your Email
//               </label>
//               <input
//                 id="email"
//                 name="Email"
//                 type="email"
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
//                 placeholder="Your Email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="Message"
//                 rows="4"
//                 className="mt-1 p-2 border border-gray-300 rounded-md w-full text-black"
//                 placeholder="Your Message"
//                 required
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               ></textarea>
//             </div>
//             {!submitted && (
//               <button
//                 type="submit"
//                 className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white"
//               >
//                 Submit
//               </button>
//             )}
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ContactForm;
import React from 'react'
import { Button } from "./ui/moving-border";
import Link from 'next/link'

function ContactForm() {
  return (
    <div id='contact'>
      <div className=" my-6  ml-28  md:ml-96 md:pl-72">
        <Link href="https://share.hsforms.com/1zBadTPyLTVu585sGj-a5TQcyk5y">
          <Button
            borderRadius="1.75rem"
            className=" bg-slate-900 text-white dark:bg-white dark:text-black border-slate-800"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ContactForm

