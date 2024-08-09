import React from "react";

const Grocery = () => {
  return (
    <>
      <h1>Grocery components...</h1>
      <div className="grocery_form">
        <form>
          <input
            type="text"
            placeholder="enter name"
            className="p-2 m-2 rounded-lg border border-black"
          />
          <input
            type="text"
            placeholder="enter message"
            className="p-2 m-2 rounded-lg border border-black"
          />
          <button className="m-2 p-2 border border-black rounded-lg bg-gray">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Grocery;
