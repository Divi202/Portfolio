const Navbar = () => {
  return (
    <div className="h-16 flex justify-between items-center">
      <div className="py-3 text-2xl">Divya</div>
      <nav className="py-3 flex gap-4 items-center">
        <ul>
          {" "}
          <a href="/">Home</a>
        </ul>
        <ul>
          {" "}
          <a href="#about">About</a>
        </ul>
        <ul>
          {" "}
          <a href="#experience">Experience</a>
        </ul>
        <ul>
          {" "}
          <a href="#projects">Projects</a>
        </ul>
        <ul>
          {" "}
          <a href="#contact">Contact</a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
