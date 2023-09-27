import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const filterData = (enteredFilteredYear) => {
    setYear(enteredFilteredYear);
  };

  const filteredArray = props.items.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilterData={filterData} />
        <ExpensesChart expenses={filteredArray} />
        <ExpensesList items={filteredArray} />
      </Card>
    </div>
  );
}

export default Expenses;
