import { useSelector } from "react-redux";
import Item from "./Item";
import { selectTransactions } from "../redux/transactionSlice";

const Table = () => {
  const transactions = useSelector(selectTransactions);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <thead className="text-2xl font-bold">
          <tr>
            <th></th>
            <th>Comment</th>
            <th>Type</th>
            <th>Category</th>
            <th>Date</th>
            <th>Sum</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          {transactions.map((item, idx) => {
            return <Item key={item.id} item={item} idx={idx} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
