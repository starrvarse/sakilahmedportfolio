"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full Stack Developer",
        "Backend Developer",
        "Coder",
      ],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="faded-text">Sakil Ahmed</div>

      <div className="hero-section-left">
        <div className="hero-section-heading">Hi! Sakil Ahmed here</div>
        <div className="hero-section-heading hero-section-sub-heading">
          I am a <span ref={el} className="role"></span>
        </div>

        <div className="hero-section-description">
          I&apos;m an aspiring software developer and here is my portfolio website. Here you&apos;ll
          learn about my journey as a software developer.
        </div>

        <button className="btn-pink" id="btn">Hire me</button>
      </div>

      <div className="hero-section-right">
        <div className="absolute icons icon-dots">
          <Image src="/images/userAsset/dots.png" alt="dots" width={70} height={70} />
        </div>
        <div className="absolute icons icon-cube">
          <Image src="/images/userAsset/cube.png" alt="cube" width={70} height={70} />
        </div>
        <div className="absolute icons icon-circle">
          <Image src="/images/userAsset/circle.png" alt="circle" width={70} height={70} />
        </div>
        <div className="absolute icons icon-zigzag">
          <Image src="/images/userAsset/zigzags.png" alt="zigzag" width={70} height={70} />
        </div>
        <div className="absolute icons icon-plus">
          <Image src="/images/userAsset/plus.png" alt="plus" width={70} height={70} />
        </div>
        <div className="user-image">
          <Image src="/images/userAsset/UserImage.png" alt="Sakil Ahmed" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;