import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const filterData = (enteredFilteredYear) => {
    setYear(enteredFilteredYear);
  };

  const filteredArray = props.items.filter((item) => {
    return item.date.getFullYear().toString() === year;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredArray.length > 0) {
    expensesContent = filteredArray.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      );
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilterData={filterData} />
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
