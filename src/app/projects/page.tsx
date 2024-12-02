import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <div className="projects">
        <div className="projects-info">
          <h1 className="projects-heading">
            Here are some of My Projects
          </h1>
          <p className="projects-text">
            I have worked on a range of web development projects that showcase
            my skills and versatility in the field. My experience includes
            building and customizing WordPress websites, where I have focused on
            creating user-friendly navigation, responsive design, and visually
            appealing layouts. Many of my projects have involved e-commerce,
            where I developed online stores with features like product catalogs,
            shopping carts, and payment gateways to ensure a seamless shopping
            experience for customers. In addition to WordPress, I have worked
            extensively with Next.js, using TypeScript to enhance the
            reliability and maintainability of my code. I prefer to use custom
            CSS over Tailwind CSS to have more granular control over the design
            and styling. These projects allowed me to create dynamic,
            interactive web pages, highlighting my capability to handle both
            front-end and back-end development. I have also taken on projects
            that involve social media management, aligning web content with
            broader social media strategies to maintain a consistent brand
            image. My graphic design skills have played a key role in these
            projects, allowing me to create custom graphics, logos, and other
            visual assets using tools like Canva, which enhance the
            professionalism and visual appeal of my websites. Overall, my
            projects reflect a comprehensive approach to digital solutions,
            blending web development, e-commerce, and design to meet diverse
            business needs
          </p>
        </div>
        <div className="projects-gallery">
          <div className="projects-gallery-row">
            <div className="projects-gallery-img">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="projects-img-kind1"
                src="/images/Shareable.PNG"
              />
            </div>
            <div className="projects-gallery-img">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="projects-img-kind1"
                src="/images/static.PNG"
              />
            </div>
            <div className="projects-ren-row">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="projects-img-kind2"
                src="/images/word.PNG"
              />
            </div>
          </div>
          <div className="projects-gallery-row">
            <div className="projects-ren-row">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="projects-img-kind2"
                src="/images/tic.PNG"
              />
            </div>
            <div className="projects-gallery-img">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="projects-img-kind1"
                src="/images/kali.PNG"
              />
            </div>
            <div className="projects-gallery-img">
              <Image
                width={300}
                height={300}
                alt="gallery"
                className="projects-img-kind1"
                src="/images/stop.PNG"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
