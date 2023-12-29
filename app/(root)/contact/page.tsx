import { ContactForm } from "@/components/contactForm";
import Footer from "@/components/footer";
import Navbar from "@/components/nav-bar";

export default function Contact() {
    return (
      <div className="">
         <Navbar/>
        <ContactForm/>
        <Footer/>
      </div>
    )
  }