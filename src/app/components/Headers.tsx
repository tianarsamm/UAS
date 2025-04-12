export default function Header() {
    return (
      <header className="flex flex-col md:flex-row items-center justify-between px-6 pt-10 pb-0 ">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Increase Your <br /> Customers Loyalty <br /> and Satisfaction
          </h1>
          <p className="text-black mb-6 text-ms">
            We help business like yours earn more costumers, <br/> standout from competitors, make more money
          </p>
          <a href="#get-started" className="font-bold bg-green-500 text-white px-5 py-4 rounded-lg text-sm hover:bg-green-600 transition duration-300 ease-in-out">Get Started</a>
        </div>
        <img
          src="/images/Group 38.svg"
          alt="Hero"
          className="w-full md:w-1/2 mt-0"
        />
      </header>
    );
  }
  