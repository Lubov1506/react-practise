import { useSelector } from "react-redux";
import {
  selectIncome,
  selectExpense,
  selectTransactions,
} from "../redux/transactionSlice";

const Statistics = () => {
  const income = useSelector(selectIncome);
  const expense = useSelector(selectExpense);
  const transacions = useSelector(selectTransactions).length;
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Statistics</h1>
      <div className="flex min-h-[50vh] justify-center items-center">
        <div className="stats stats-vertical lg:stats-horizontal shadow ">
          <div className="stat">
            <div className="stat-title">Income</div>
            <div className="stat-value">{income}</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">Expense</div>
            <div className="stat-value">{expense}</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">Transactions Count</div>
            <div className="stat-value">{transacions}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
          <div className="stat">
            <div className="stat-title">Difference</div>
            <div className="stat-value">{income - Math.abs(expense)}</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
