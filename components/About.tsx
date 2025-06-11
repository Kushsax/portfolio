"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.to(".about", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
      x: 200,
      duration: 2,
      opacity: 1,
    });

    gsap.to(".para", {
      scrollTrigger: {
        trigger: ".para",
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
      duration: 2,
      opacity: 1,
    });
  }, []); 

  return (
    <div className="bg-black min-h-screen min-w-screen px-6 py-20 overflow-hidden ">
      <h1 className="about text-white text-6xl opacity-0">About Me...</h1>
      <p className="para opacity-0 p-40 text-2xl text-white max-w-screen">
        I’m currently a first-year student pursuing a Bachelor's degree in Artificial Intelligence and Data Science at Thadomal Shahani Engineering College. With a strong passion for coding, problem-solving, and innovation, I find immense joy in exploring the intersection of technology and creativity.<br/> 

        From an early age, I’ve been fascinated by how software can be used to solve real-world problems. This curiosity has led me to dive deep into programming and continuously challenge myself to build solutions that are not just functional, but meaningful and impactful. Whether it’s learning a new language, contributing to an open-source project, or building a feature-rich application from scratch, I approach every opportunity as a chance to grow.<br/> 

        Currently, I’m sharpening my technical skills across areas like full-stack development, data structures, and machine learning, while also gaining hands-on experience through personal projects and collaborations. I believe in the power of communities and enjoy engaging with peers through hackathons, coding competitions, and tech meetups, where I can learn, contribute, and build lasting connections.<br/> 

        Driven by a desire to stay at the forefront of technology, I’m particularly excited about the transformative potential of AI and its applications across industries. My goal is to contribute to projects that push the boundaries of what's possible — whether that’s through intelligent systems, automation, or data-driven insights.<br/> 

        I'm always open to new challenges, collaborative opportunities, and conversations with like-minded individuals. If you’re passionate about technology and looking to build something amazing — let’s connect!<br/> 
      </p>
    </div>
  );
};

export default About;
