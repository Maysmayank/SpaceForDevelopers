import AboutMe from '@/components/AboutMe';
import ContactForm from '@/components/ContactForm';
import React from 'react';

export default function Page() {
//   async function handelSubmit(event) {
//     event.preventDefault(); // Prevent default form submission behavior
//     console.log("Form submitted!");
//     // Perform additional logic, such as sending data to the backend
//   }

  return (
    <div className="flex flex-col items-center justify-center bg-[#37424d] pt-20 ">
      <AboutMe/>
      <ContactForm/>
    </div>
  );
}
