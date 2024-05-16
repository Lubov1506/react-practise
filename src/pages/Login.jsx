import { useDispatch } from "react-redux"
import AuthForm from "../components/AuthForm"
import { login } from "../redux/authSlice"

const Login = () => {
  const dispatch = useDispatch()
    const initialValues = {
    email: '',
    password: ''
  }
  const handleSubmit = (data) => {
    dispatch(login(data))
  }
  return (
    <div>
      <AuthForm type='login' initialValues={initialValues} handleSubmit={ handleSubmit} />
    </div>
  )
}

export default Login