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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilterData={filterData} />
        {props.items.map((item) => {
          return (
            <ExpenseItem
              date={item.date}
              title={item.title}
              amount={item.amount}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
