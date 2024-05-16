
function App() {
  return (
    <table>
      <tbody>
        <tr>
          <th>1</th>
          <td>Salary</td>
          <td>Expense</td>
          <td>Car</td>
          <td>15.05.2024</td>
          <td>2000</td>
          <td className="flex gap-4">
            <button className="btn btn-primary ">Edit</button>
            <button className="btn btn-error">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
