import { useDispatch } from "react-redux"
import AuthForm from "../components/AuthForm"
import { register } from "../redux/authSlice"

const Register = () => {

  const dispatch = useDispatch()
  const initialValues = {
    name: '',
    email: '',
    password: ''
  }
  const handleSubmit = (data) => {
    dispatch(register(data));
  }
  return (
    <div><AuthForm initialValues={initialValues} handleSubmit={handleSubmit} type='register'/></div>
  )
}

export default Register