import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        
         
        {filteredExpenses.length === 0 ? (
          <p> No Expenses Found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem // app.jsdeki expense item olan objeyi maple arraye çevirip tek adımda ExpenseItem componentinde
              key={expense.id}
              title={expense.title} // renderlıyor. harika olay.
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;