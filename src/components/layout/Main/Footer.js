const Footer = () => {
  return (
    <footer className="footer relative p-1 border-b-2 bg-white">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase">fh1</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase">fh2</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase">fh3</span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-8 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-yellow-700 font-bold">
                © 2021 by Eric Santana
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
