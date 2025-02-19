const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <div className="container mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} Standard of Excellence. All rights reserved.</p>
        <p className="text-sm">Empowering boys, teenagers, and men for success.</p>
      </div>
    </footer>
  );
};

export default Footer;
