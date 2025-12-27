const About = () => {
  return (
    <section id="about" className="h-full pb-32 flex flex-col gap-16">
      {/* Section Heading  */}
      <h2 className="text-xl font-semibold text-center">About Me</h2>
      {/* Section Content  */}
      <div className="h-full flex gap-10">
        {" "}
        {/* Left content : Image  */}
        <div className="flex items-center justify-center w-[40%]">
          <img
            className="border-2 rounded-[50%] h-90 w-90 rotate-y-180"
            src="src/assets/download.jpg"
            alt="hero"
          />
        </div>
        {/* Right content : Text  */}
        <div className="flex flex-col items-start w-[60%] gap-2">
          {/* - Content heading: Developement/Building is my Passion */}
          <h3 className="ml-10 text-lg font-medium">Building is My Passion</h3>
          {/* Description about me  */}
          <p className="ml-10 text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            provident veniam laudantium dolorem omnis laboriosam excepturi
            nostrum labore, nemo ratione debitis odit repellat, quam
            reprehenderit doloribus earum iste voluptas possimus nesciunt fuga
            qui libero! Illum perferendis vero sapiente. Doloribus sint
            molestias facere sapiente veniam neque qui cumque unde eius
            repellendus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
