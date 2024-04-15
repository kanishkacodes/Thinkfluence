import About from "@/components/About";
import TestimonialCard from "@/components/TestimonialCard";
import Card from "@/components/Card";
import Team from "@/components/Team";
import WorkedWith from "@/components/Workedwith";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Approach from "@/components/Approach";
import NewHero from "@/components/NewHero";
import Different from "@/components/Different";
import NewServices from "@/components/NewServices";
import Contact from "@/components/ContactForm";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
    <NewHero/>  
    
    {/* <HeroSection/> */}
    
    <Navbar/>
   
    <About/>
    <Different  />
    {/* <WorkedWith/> */}
    <NewServices/>  
    
    {/* <Card/>
    <TestimonialCard/>
    <Approach/>
    <Team/> */}

    {/* <Contact
    /> */}

    <ContactForm/>
    <Footer/>
    
    

    </>
  );
}
