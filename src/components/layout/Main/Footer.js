const Footer = () => {
  return (
    <footer class="footer relative p-1 border-b-2 bg-white">
      <div class="container mx-auto px-6">
        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div class="flex flex-col">
              <span class="font-bold text-gray-700 uppercase">fh1</span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-gray-700 uppercase">fh2</span>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-gray-700 uppercase">fh3</span>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-6">
          <div class="mt-8 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <p class="text-sm text-yellow-700 font-bold">
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
