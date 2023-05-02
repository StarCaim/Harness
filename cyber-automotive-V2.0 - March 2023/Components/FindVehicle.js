import React from "react";

export default function FindVehicle() {
  return (
    <section className=" py-44 bg-gradient-to-b from-indigo-dye to-oxford-blue">
      <div className=" block w-2/3 text-center mx-auto my-10 bg-oxford-blue p-7 border-rose border-4 rounded-sm text-rose font-avalon text-3xl max-w-lg">
        <h1>FIND A VEHICLE</h1>
      </div>
      <form
        action="/vehicles"
        className=" xl:flex w-full text-center content-center"
      >
        <select
          name=""
          id=""
          className=" max-w-sm my-10 mx-auto block w-3/6 xl:w-1/6 h-14 bg-oxford-blue text-robin-egg-blue appearance-none font-oxta pl-4 border-robin-egg-blue border-2 shadow-glow shadow-robin-egg-blue focus:outline-none focus:text-rose focus:border-rose focus:shadow-rose"
        >
          <option value="">All Makes</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>
        <select
          name=""
          id=""
          className=" max-w-sm my-10 mx-auto block w-3/6 xl:w-1/6 h-14 bg-oxford-blue text-robin-egg-blue appearance-none font-oxta pl-4 border-robin-egg-blue border-2 shadow-glow shadow-robin-egg-blue focus:outline-none focus:text-rose focus:border-rose focus:shadow-rose"
        >
          <option value="">All Makes</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>
        <select
          name=""
          id=""
          className=" max-w-sm my-10 mx-auto block w-3/6 xl:w-1/6 h-14 bg-oxford-blue text-robin-egg-blue appearance-none font-oxta pl-4 border-robin-egg-blue border-2 shadow-glow shadow-robin-egg-blue focus:outline-none focus:text-rose focus:border-rose focus:shadow-rose"
        >
          <option value="">All Makes</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>
        <button
          type="submit"
          className="block cb-btn font-oxta border-robin-egg-blue h-16 my-11 border-4 mx-auto bg-oxford-blue text-white w-1/2 xl:w-1/4 text-lg transition-colors duration-300 hover:bg-rose-dark hover:border-rose"
        >
          SEACH
        </button>
      </form>
    </section>
  );
}
