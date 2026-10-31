const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto p-8 my-16">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-5xl font-black">
          Build Your Ideal
          <br />
          <span className="bg-linear-to-r from-orange-600 via-pink-600 to-violet-600 bg-clip-text text-transparent">Development Stack</span>
        </h2>
        <p className="mt-4 mb-12 text-[#475569]">
          Explore frontend, backend, database, and tooling options, compare them<br/>
          side by side, and put together the stack that fits your next project.
        </p>
        <button className=" bg-linear-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-border rounded-[10px] py-2 w-45 bg-transparent mr-4">Explore Technologies</button>
        <button className=" outline-1 outline-[#E5E7EB] text-[#374151] rounded-[10px] w-45 py-2">Learn More</button>
      </div>
      <div className="col-span-1">
        <img src="./src/assets/banner-stack.png" alt="footer-logo" className="object-contain w-full h-full relative -top-14"/>
      </div>
    </div>
  );
};

export default Banner;
