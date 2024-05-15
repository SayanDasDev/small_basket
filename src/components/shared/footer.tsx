const Footer = () => {
  return (
    <>
      <div className="px-4 py-20 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-6">
        <div className="max-w-screen-sm flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            Thank you for shopping with us!
          </h1>
        </div>
        <img
          src="/bye.png"
          alt="bye"
          className="w-full max-w-[450px] mx-auto h-full object-cover scale-50"
        />
      </div>
      <p className="text-center pb-8">
        Made with ❤️ by <a href="https://dev.sayandas.me" className="">SayanDasDev</a>
      </p>
    </>
  );
};

export default Footer;
