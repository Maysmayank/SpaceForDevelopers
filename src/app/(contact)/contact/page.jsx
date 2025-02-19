import AboutMe from '@/components/AboutMe';
import ContactForm from '@/components/ContactForm';
import React from 'react';
import { AuthProvider } from '../../../../utils/AuthProvider';

export default function Page() {


  return (
    <AuthProvider>

    
    <div className="flex flex-col items-center justify-center bg-black pt-20 ">
      {/* <AboutMe/> */}
      <ContactForm/>
    </div>
    </AuthProvider>
  );
}
