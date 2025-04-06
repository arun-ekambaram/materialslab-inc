
// 'use client';

// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [message, setMessage] = useState("Welcome to Our Materials Lab!");

//   useEffect(() => {
//     fetch("http://localhost:8000")
//       .then(res => res.json())
//       .then(data => setMessage(data.message))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
//       <header className="bg-blue-950 text-white p-6 shadow-lg">
//         <h1 className="text-3xl font-bold"> Our Services</h1>
//         {/* <p className="text-sm">Testing & Analysis Services</p> */}
//       </header>

//       <section className="p-8">
//         {/* <h2 className="text-2xl font-semibold mb-4">Our Services</h2> */}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="text-xl font-bold mb-2">Materials Testing & Metallurgy</h3>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Ferrite Testing</li>
//               <li>Metallography</li>
//               <li>Hardness Testing (Micro/Macro)</li>
//               <li>XRD, SEM, EDS</li>
//               <li>Failure Analysis</li>
//             </ul>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="text-xl font-bold mb-2">Corrosion Services</h3>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Materials in Simulated Environments</li>
//               <li>Field Testing & Surveys</li>
//               <li>Coating Assessment & Selection</li>
//             </ul>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="text-xl font-bold mb-2">Concrete and Geotechnical</h3>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Ground penetrating radar</li>
//               <li>Half cell corrosion mapping</li>
//               <li> Resistivity testing</li>
//               <li> Ultrasonic pulse velocity</li>
//               <li>Ultrasonic pulse echo</li>
//               <li> Thermography</li>
//               <li>Hammer sounding and Impact Echo</li>
//               <li>Rebound hammer testing</li>
//             </ul>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="text-xl font-bold mb-2">Environmental Services</h3>
//             <ul className="list-disc list-inside space-y-1">
//               <li>ESA</li>
//               <li>Field Testing & Surveys</li>
//               <li>Coating Assessment & Selection</li>
//             </ul>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="text-xl font-bold mb-2">Advanced NDT & NDE</h3>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Materials in Simulated Environments</li>
//               <li>Field Testing & Surveys</li>
//               <li>Coating Assessment & Selection</li>
//             </ul>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <h3 className="text-xl font-bold mb-2">QA/QC</h3>
//             <ul className="list-disc list-inside space-y-1">
//               <li>Steel mill site inspection of structural, pipelines and tubular products</li>
//               <li>Vendor surveillance and audits</li>
//               <li>Monitoring test procedures, loading and shipping practices</li>
//             </ul>
//           </div>


//           {/* */}
//         </div>

//         <div className="mt-10 text-center">
//           <p className="text-lg text-blue-800 font-semibold">{message}</p>
//         </div>
//       </section>
//     </main>
//   );
// }



// export function ContactPage() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message sent! (This is just a demo)");
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="bg-white p-6 rounded-2xl shadow max-w-xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4 text-blue-800">Contact Us</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           className="w-full border p-2 rounded"
//           placeholder="Your Name"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="w-full border p-2 rounded"
//           placeholder="Email"
//           name="email"
//           type="email"
//           value={form.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           className="w-full border p-2 rounded"
//           placeholder="Your Message"
//           name="message"
//           rows="4"
//           value={form.message}
//           onChange={handleChange}
//           required
//         />
//         <button
//           type="submit"
//           className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// // Stylish dropdown component for Materials Testing & Metallurgy
// function MaterialsDropdown() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => setIsOpen(!isOpen);

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
//       {/* Clickable header with animated arrow */}
//       <h3
//         onClick={toggleDropdown}
//         className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center justify-between"
//       >
//         <span>Materials Testing & Metallurgy</span>
//         <svg
//           className={`w-5 h-5 transform transition-transform duration-300 ${
//             isOpen ? 'rotate-180' : 'rotate-0'
//           }`}
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </h3>

//       {/* Dropdown list with smooth transition */}
//       {isOpen && (
//         <ul className="mt-4 space-y-3 transition-all duration-300 ease-out">
//           <li>
//             <Link
//               href="/ferrite-testing"
//               className="block text-lg text-blue-600 hover:text-blue-800 transition-colors"
//             >
//               Ferrite Testing
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/metallography"
//               className="block text-lg text-blue-600 hover:text-blue-800 transition-colors"
//             >
//               Metallography
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/hardness-testing"
//               className="block text-lg text-blue-600 hover:text-blue-800 transition-colors"
//             >
//               Hardness Testing (Micro/Macro)
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/xrd-sem-eds"
//               className="block text-lg text-blue-600 hover:text-blue-800 transition-colors"
//             >
//               XRD, SEM, EDS
//             </Link>
//           </li>
//           <li>
//             <Link
//               href="/failure-analysis"
//               className="block text-lg text-blue-600 hover:text-blue-800 transition-colors"
//             >
//               Failure Analysis
//             </Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }



// export default function Home() {
//   const [message, setMessage] = useState("Welcome to Our Materials Lab!");

//   useEffect(() => {
//     fetch("http://localhost:8000")
//       .then((res) => res.json())
//       .then((data) => setMessage(data.message))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
//       <header className="bg-blue-950 text-white p-6 shadow-lg">
//         <h1 className="text-3xl font-bold">Our Services</h1>
//       </header>

//       <section className="p-8">
//         {/* Display the dynamic message (from FastAPI) if needed */}
//         <p className="mb-6 text-lg">{message}</p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Replace the original static card with our dropdown component */}
//           <MaterialsDropdown />

//           {/* Example of another service card */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h3 className="text-xl font-bold mb-2">Another Service</h3>
//             <p className="text-gray-600">Description of another service goes here.</p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// Dropdown Component for Materials Testing & Metallurgy
function MaterialsDropdown({ activeDropdown, setActiveDropdown }) {
  const isOpen = activeDropdown === 'materials';

  // Toggle this dropdown; stop propagation so parent's onClick doesn't fire.
  const toggleDropdown = (e) => {
    e.stopPropagation();
    setActiveDropdown(isOpen ? null : 'materials');
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3
        onClick={toggleDropdown}
        className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center justify-between"
      >
        <span>Materials Testing & Metallurgy</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </h3>
      {isOpen && (
        <ul className="mt-4 space-y-3 transition-all duration-300 ease-out">
          <li>
            <Link href="/ferrite-testing" className="block text-lg text-blue-600 hover:text-blue-800 transition-colors">
              Ferrite Testing
            </Link>
          </li>
          <li>
            <Link href="/metallography" className="block text-lg text-blue-600 hover:text-blue-800 transition-colors">
              Metallography
            </Link>
          </li>
          <li>
            <Link href="/hardness-testing" className="block text-lg text-blue-600 hover:text-blue-800 transition-colors">
              Hardness Testing (Micro/Macro)
            </Link>
          </li>
          <li>
            <Link href="/xrd-sem-eds" className="block text-lg text-blue-600 hover:text-blue-800 transition-colors">
              XRD, SEM, EDS
            </Link>
          </li>
          <li>
            <Link href="/failure-analysis" className="block text-lg text-blue-600 hover:text-blue-800 transition-colors">
              Failure Analysis
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

// Dropdown Component for Another Service
function AnotherDropdown({ activeDropdown, setActiveDropdown }) {
  const isOpen = activeDropdown === 'another';

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setActiveDropdown(isOpen ? null : 'another');
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3
        onClick={toggleDropdown}
        className="text-2xl font-semibold text-gray-800 cursor-pointer flex items-center justify-between"
      >
        <span>Another Service</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </h3>
      {isOpen && (
        <ul className="mt-4 space-y-3 transition-all duration-300 ease-out">
          <li>
            <Link href="/another-service-option-1" className="block text-lg text-blue-600 hover:text-blue-800 transition-colors">
              Service Option 1
            </Link>
          </li>
          <li>
            <Link href="/another-service-option-2" className="block text-lg text-blue-600 hover:text-blue-800 transition-colors">
              Service Option 2
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default function Home() {
  const [message, setMessage] = useState("Welcome to Our Materials Lab!");
  // Parent state to manage which dropdown is open
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    // When clicking outside of any dropdown, close all dropdowns.
    <main onClick={() => setActiveDropdown(null)} className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-blue-950 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Our Services</h1>
      </header>
      <section className="p-8">
        <p className="mb-6 text-lg">{message}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MaterialsDropdown activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
          <AnotherDropdown activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown} />
        </div>
      </section>
    </main>
  );
}
