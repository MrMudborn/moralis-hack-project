const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4">
    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img
          src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
          alt="logo"
          className="w-32"
        />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2">
          &copy; ThisProject
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          About
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Privacy
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          Github
        </p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">
          <a href="mailto:pank4139@gmail.com">Contact</a>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
