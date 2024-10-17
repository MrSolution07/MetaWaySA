'use client'
import React, { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "../components/ui/texterea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Menu, X } from 'lucide-react';
import './styles.css';

export default function OnePage() {
  const [subject, setSubject] = useState('general')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const teamRef = useRef(null)
  const contactRef = useRef(null)

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
    { name: 'Lesedi ', role:
      'Fronted Developer', 
      imageSource: '',
      profile: ''
    },
    { name: 'Govenor', role: 'Fronted Developer' },
    { name: 'Mabuda', role: 'Technical Writer', 
      imageSource: 'https://media.licdn.com/dms/image/v2/D4D03AQErBquvjESo_w/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1714773917295?e=1734566400&v=beta&t=frVSFkGqgZc7uSJiZrbjiE6L1CSHahrZMtC-yhM3q04',
      profile: ''
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
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white">Discover amazing features and services</p>
          <Button onClick={() => scrollToSection(contactRef)} className="bgColor text-white hover:bg-gray-200">Talk to us</Button>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-black">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg mb-6 text-black">
              We are a dedicated team of professionals committed to delivering innovative solutions to our clients. 
              With years of experience in the industry, we strive to exceed expectations and create lasting partnerships.
            </p>
            <p className="text-base md:text-lg text-black">
              Our mission is to empower businesses with cutting-edge technology and unparalleled support, 
              helping them thrive in the digital age.
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
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-black">Name</Label>
              <Input id="name" placeholder="Your name" className="bg-white text-black border-gray-300" />
            </div>
            <div>
              <Label htmlFor="email" className="text-black">Email</Label>
              <Input id="email" type="email" placeholder="Your email" className="bg-white text-black border-gray-300" />
            </div>
            <div>
              <Label htmlFor="subject" className="text-black">Subject</Label>
              <Select onValueChange={setSubject} defaultValue={subject}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="delete-account">Request Account Deletion</SelectItem>
                  <SelectItem value="verify-account">Request Account Verification</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message" className="text-black">Message</Label>
              <Textarea 
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

