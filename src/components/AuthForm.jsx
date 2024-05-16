import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";

const AuthForm = ({ initialValues, handleSubmit, type }) => {
  console.log(type);
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              {type === "login" ? "Login now!" : "Register"}
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form className="card-body">
                {type === "register" && (
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <Field
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                      required
                      name="name"
                    />
                  </div>
                )}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <Field
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <Field
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    name="password"
                  />
                  <label className="label">
                    <Link to={type === "login" ? "/register" : "/login"}>
                      <p className="text-sm hover:text-blue-700">
                        {type === "login"
                          ? "You don`t have an account? Create"
                          : "You have an account? Login!"}
                      </p>
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submiy" className="btn btn-primary">Login</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
