const data = [
  {
    id: 1,
    name: "Home",
    url: "#home",
  },
  {
    id: 2,
    name: "About",
    url: "#about",
  },
  {
    id: 3,
    name: "Videos",
    url: "#videos",
  },
  {
    id: 4,
    name: "Forum",
    url: "#forum",
  },
];

const Navbar = () => {
  return (
    <nav className="py-5">
      <div className="flex flex-row gap-10 justify-end mx-8">
        {data.map((item) => (
          <p
            key={item.id}
            className="glich relative touch-manipulation select-none cursor-pointer uppercase"
          >
            /{item.name}
          </p>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
