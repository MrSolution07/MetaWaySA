'use client'
import React, { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "../components/ui/texterea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Menu, X } from 'lucide-react';
import './styles.css';
import emailjs from '@emailjs/browser';


export default function OnePage() {
  const [subject, setSubject] = useState('general')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const teamRef = useRef(null)
  const contactRef = useRef(null)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  
    if (!publicKey) {
      console.error('Public key is not defined');
      window.alert('Public key for EmailJS is missing');
      return;
    }
  
    emailjs
      .sendForm(
        'service_yehrrri',    
        'template_dddpkfq',    
        form.current,          
        publicKey              
      )
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          window.alert('Failed to send the message');
        }
      );
  };


  const teamMembers = [
    { name: ' Christian Bulabula', 
      role: 'Lead Developer',
      imageSource : 'https://media.licdn.com/dms/image/v2/D4D03AQG-T09_y9alIg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692568703614?e=1734566400&v=beta&t=6d3LFaDP_42zPkZJvNhhljvmQDTeYP6D1CYT8L1Eu_w',
      profile: 'https://www.linkedin.com/in/christian-bulabula-93a667289/'
    },
    { name: 'Mike Katutwa',
      role: 'Backend Developer',
      imageSource : 'https://media.licdn.com/dms/image/v2/D4D03AQGbRyVIr1qdqA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714336993396?e=1734566400&v=beta&t=bHosSnBcMF1vV9ipCVfudbvN0II_qPlqTBsSe7kVXpo',
      profile:'https://www.linkedin.com/in/mike-katutwa-a77b66279/' 
    },
    { name: 'Lesedi Ntamane', 
      role:'UI/UX Designer', 
      imageSource: 'https://media.licdn.com/dms/image/v2/D4D03AQFP_s9g-AR4NQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719003697256?e=1734566400&v=beta&t=Y4F-AVAp-h1IxDS8JBR8t7UvIRuxcxHSjhywwZMmJ6g',
      profile: 'https://www.linkedin.com/in/lesedi-naledi-ntamane-47b3bb301/'
    },
    { name: 'Govenor Khoza',
      role: 'Fronted Developer',
      imageSource: 'https://media.licdn.com/dms/image/v2/D4D03AQFuDBFDNmFAEg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729191628528?e=1735171200&v=beta&t=oINeZvJcLeLMpuUlDwF70ndVocVL3Br9nQKHHIaGf8k',
      profile : 'https://www.linkedin.com/in/govenor-khoza-7313a9215/?original_referer=&originalSubdomain=za'
    },
    { name: 'Anonga Mabuda', role: 'Technical Writer', 
      imageSource: 'https://media.licdn.com/dms/image/v2/D4D03AQErBquvjESo_w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1714773917295?e=1734566400&v=beta&t=frVSFkGqgZc7uSJiZrbjiE6L1CSHahrZMtC-yhM3q04',
      profile: 'https://www.linkedin.com/in/anonga-mabuda-68298a26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
  ]

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Navbar */}
      <nav className="bg-black p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full mr-1.5">
              <img src="./icon.png" alt="Logo" className="w-10 h-10 rounded-full" />
            </div>
            <span className="font-bold text-xl custom-color">
              MetaWay SA
            </span>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
          <ul className={`md:flex space-y-2 md:space-y-0 md:space-x-4 ${mobileMenuOpen ? 'absolute top-full left-0 right-0 bg-black p-4' : 'hidden'}`}>
            <li><button onClick={() => scrollToSection(homeRef)} className="text-white hover:text-gray-300 w-full text-left">Home</button></li>
            <li><button onClick={() => scrollToSection(aboutRef)} className="text-white hover:text-gray-300 w-full text-left">About</button></li>
            <li><button onClick={() => scrollToSection(teamRef)} className="text-white hover:text-gray-300 w-full text-left">Team</button></li>
            <li><button onClick={() => scrollToSection(contactRef)} className="text-white hover:text-gray-300 w-full text-left">Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Landing Section */}
      <section id="home" ref={homeRef} className="bg-black py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white">Welcome to Our Website</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white">Empowering South Africans with NFT investment opportunities and expert knowledge</p>
          <Button onClick={() => scrollToSection(contactRef)} className="bgColor text-white hover:bg-gray-200">Talk to us</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-black">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg mb-6 text-black">
              We are a passionate team focused on helping South Africans invest in NFTs and understand the technology behind it.
              With years of experience, we aim to educate and empower individuals to navigate the world of digital assets confidently, 
              turning opportunities into success.
            </p>
            <p className="text-base md:text-lg text-black">
              Our mission is to provide innovative solutions and expert guidance,
              enabling our clients to make informed decisions and grow their investments in the evolving NFT space.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-white">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-full mx-auto mb-4">
                  <img
                    src={member.imageSource || 'https://via.placeholder.com/150'}
                    alt={member.name}
                    className="w-40 h-40 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={member.profile} className="text-white text-sm">View Profile</a>
                  </div>
                </div>
                <h3 className="font-semibold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-white">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-black">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <Label htmlFor="name"  className="text-black">Name</Label>
              <Input id="name" name="fName"placeholder="Your name" className="bg-white text-black border-gray-300" />
            </div>
            <div>
              <Label htmlFor="email" className="text-black">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Your email" className="bg-white text-black border-gray-300" />
            </div>
            <div>
              <Label className="text-black">Subject</Label>
              <Select onValueChange={setSubject} name="subject" defaultValue={subject}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent name="subject">
                  <SelectItem name="subject" value="general">General Inquiry</SelectItem>
                  <SelectItem name="subject" value="delete-account">Request Account Deletion</SelectItem>
                  <SelectItem name="subject" value="verify-account">Request Account Verification</SelectItem>
                  <SelectItem name="subject" value="support">Technical Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-black">Message</Label>
              <Textarea 
                name="message"
                id="message" 
                placeholder="Your message" 
                rows={4}
                className="bg-white text-black border-gray-300"
              />
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6">
        <div className="container mx-auto text-center px-4">
          <p className="text-white">&copy; {new Date().getFullYear()} <span className="custom-color">MetaWay SA</span>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

