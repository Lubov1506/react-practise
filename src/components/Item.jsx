import clsx from "clsx";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/transactionSlice";

const Item = ({ item, idx }) => {
  const dispatch = useDispatch()
  return (
    <tr>
      <th>{idx}</th>
      <td>{item.comment}</td>
      <td
        className={clsx('font-bold',
          item.type === "Expense" ? "text-error" : "text-success"
        )}
      >
        {item.type}
      </td>
      <td>{item.category}</td>
      <td>{moment(item.date).format("DD.MM.YYYY")}</td>
      <td  className={clsx('font-bold',
          item.type === "Expense" ? "text-error" : "text-success"
        )}>{item.sum}</td>
      <td>
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-error" onClick={()=>dispatch(deleteTransaction(item.id))}>Delete</button>
      </td>
    </tr>
  );
};

export default Item;
