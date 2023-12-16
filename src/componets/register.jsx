import { useState } from 'react'
import {logo} from '../constants'
import Input from '../ui/input'
import { registerUserFailure, registerUserStart, registerUserSuccess } from '../slice/auth'
import { useDispatch, useSelector } from 'react-redux'
import AuthService from '../service/auth'

const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)


  const loginHandler =  async e => {
    e.preventDefault()
    dispatch(registerUserStart())
    const user = {username, email , password }
    try {
      const response  = await AuthService.userRegister(user)
      console.log(response);
      console.log(user);
      dispatch(registerUserSuccess())
    } catch (error) {
      dispatch(registerUserFailure())
    }
  }


  return (
    <div className="text-center mt-5">
      <main className="form-signin w-100 p-2 m-auto row">
        <div className="col-sm-5  m-auto">
  <form>
    <img className="mb-4" src={logo} alt="" width="172" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    <Input Label={'Username'} state={username} setState={setUsername} />
    <Input Label={'Email adress'} type='email' state={email} setState={setEmail} />
    <Input Label={'Password'} type='password' state={password} setState={setPassword} />

  

    <button className="w-100 btn btn-lg btn-primary mt-4 " disabled={isLoading} onClick={loginHandler} type="submit">{isLoading ? 'Loading...': 'Register'}</button>
    <p className="mt-5 mb-3 text-muted">© 2023-2024</p>
  </form>
        </div>
</main>
    </div>
  )
}

export default Register