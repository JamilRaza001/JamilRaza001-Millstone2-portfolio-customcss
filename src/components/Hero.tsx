import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img">
        <Image
          src="/images/mypic.png"
          alt="mypic"
          width={350}
          height={350}
          className="img-hero"
        />
      </div>
      <div className="hero-info">
        <div>
          <h1 className="hero-name">Hello, I am<br />M. Jamil<br />Raza Attari</h1>
        </div>
        <div className="hero-btns">
          <button className="hero-btn1">
            <Link className="hero-link" href="/about">About Me</Link>
          </button>
          <button className="hero-btn2">
            <Link className="hero-link" href="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
