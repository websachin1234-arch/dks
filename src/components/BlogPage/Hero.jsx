const Hero = () => {
  return (
    <section
      className="xl:min-h-80 w-full min-h-fit px-4 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${"/assets/images/webp/bloghero.webp"})`,
      }}
    >
      <div className="container max-w-102 mx-auto w-full">
        <div className="row w-full md:pt-20 md:pb-22 py-15">
          <h1 className="text-[clamp(28px,4vw,48px)] leading-121 text-black font-semibold text-center">
            Blog
          </h1>
          <p className="text-dark-gray text-center text-base mt-4 leading-163">
            Get expert upholstery tips, care guides, and style inspiration to
            keep your furniture fresh, stylish, and long lasting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
