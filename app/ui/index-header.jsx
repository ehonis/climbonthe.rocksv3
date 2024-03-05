export default function IndexHeader() {
  return (
    <div>
      <h1 className="justify-self-center p-8 text-center text-2xl font-bold text-primary">
        Welcome To&nbsp;
        <span className="gradient-text">On The Rocks</span>
        &nbsp;Interactive Guidebook
      </h1>
      <div className="flex justify-center">
        <a href="loginPage.html">
          <button className="mb-5 mr-5 rounded-md border-none bg-green-400 px-5 pb-3 pt-3 transition-transform duration-300 hover:scale-110 hover:border-solid hover:border-white">
            Signup
          </button>
        </a>
        <a href="loginPage.html">
          <button className="mb-5 mr-5 rounded-md border-none bg-blue px-5 pb-3 pr-5 pt-3 transition-transform duration-300 hover:scale-110 hover:border-solid hover:border-white">
            Login
          </button>
        </a>
      </div>
    </div>
  );
}
