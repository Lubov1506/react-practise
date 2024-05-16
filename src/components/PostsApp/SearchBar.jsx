import { Field, Form, Formik } from "formik"

export const SearchBar = ({setSearchVaalue}) => {
    const handleSubmit = (value) => {
        setSearchVaalue(value.query)
    }
  return (
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
          <Form>
              <Field type='text' name='query' />
              
              <button type="submit">Search</button>
              </Form>
      </Formik>
  )
}
