import React from "react";
import Expense from "../assets/Expense.png";
import pattern from "../assets/manageExpenses.png";

const ManageExpenses = () => {
  return (
    <section className="m-10">
      <div className="row">
        <div className="col-md-7 ">
          <img src={pattern} alt="pattern" className="pattern" />
          <div className="expenses expense-head">
            Manage Expenses Like A Real Pro
            <hr className="line-expense"></hr>
            <div className="content-expense">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
              massa ac tristique nec fermentum integer cras quisque vitae. Etiam
              tortor ultrices adipiscing sed enim. Eget non pretium donec
              condimentum et. Venenatis enim, sed mattis auctor senectus proin
              tellus phasellus. Eget nunc sed turpis.
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <img src={Expense} alt="Expense" className="expense-img" />
          <div className="easier">
            <br />
            EXPENSE MANAGEMENT <br />
            <text className="size">
              {" "}
              JUST GOT “<text className="color">eaSIER</text>”
            </text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageExpenses;
