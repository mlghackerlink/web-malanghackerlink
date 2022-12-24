const Section = ({ title, children }) => {
  return (
    <div className="py-12 min-h-screen">
      <p className="my-5">usage : mhl {title}</p>
      {children}
    </div>
  );
};

export default Section;
