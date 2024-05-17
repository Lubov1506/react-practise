import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import { selectExpense, selectIncome } from "../redux/catsSlice";
import { addTransaction } from "../redux/transactionSlice";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const AddForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const income = useSelector(selectIncome);
  const expense = useSelector(selectExpense);
  const [startDate, setStartDate] = useState(new Date());
  console.log(moment(new Date()).format("DD.mm.YYYY HH:mm:ss"));
  const initialValues = {
    sum: "",
    type: "Expense",
    category: "",
    comment: "",
  };
  const handleSubmit = (data) => {
    const sum = data.type === "Income" ? +data.sum : -data.sum;
    dispatch(
      addTransaction({
        id: nanoid(),
        ...data,
        date: startDate.toISOString(),
        sum,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className="card-body w-1/2 mx-auto p-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sum</span>
              </label>
              <Field
                type="number"
                placeholder="Enter sum"
                className="input input-bordered"
                required
                name="sum"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <Field
                as="select"
                className="input input-bordered"
                required
                name="type"
              >
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
              </Field>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <Field
                as="select"
                className="input input-bordered"
                required
                name="category"
              >
                <option value="">Select category</option>
                {(values.type === "Expense" ? expense : income).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Field>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>

              <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Comment</span>
              </label>
              <Field
                type="text"
                placeholder="Enter comment"
                className="input input-bordered"
                required
                name="comment"
              />
            </div>
            <div className="form-control mt-6 flex gap-2 flex-row">
              <button
                type="button"
                className="btn btn-error flex-grow"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button type="submiy" className="btn btn-primary flex-grow">
                Create transaction
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddForm;
