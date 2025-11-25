import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";

function Home() {
  return (
    <div style={{ padding: "60px 24px" }}>
      <h2>Home</h2>
    </div>
  );
}
function Contact() {
  return (
    <div style={{ padding: "60px 24px" }}>
      <h2>Contact</h2>
    </div>
  );
}
function About() {
  return (
    <div style={{ padding: "60px 24px" }}>
      <h2>About</h2>
    </div>
  );
}
function SignUp() {
  return (
    <div style={{ padding: "60px 24px" }}>
      <h2>Sign Up</h2>
    </div>
  );
}

export default function App() {
  return (
    <>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}
