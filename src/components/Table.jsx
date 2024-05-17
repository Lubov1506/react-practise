import Item from "./Item";

const Table = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
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
     <Item/>
     <Item/>
     <Item/>
     <Item/>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
