import { useState } from 'react'
import { logo } from '../constants'
import Input from '../ui/input'
import { useDispatch, useSelector } from 'react-redux';
import { loginUserStart } from '../slice/auth';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)


  const loginHandler = e => {
    e.preventDefault()
    dispatch(loginUserStart())
  }


  return (
    <div className="text-center mt-5">
      <main className="form-signin w-100 m-auto p-2">
     <div className="col-sm-5 m-auto">
     <form>
          <img className="mb-4" src={logo} alt="" width="172" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>

          <Input Label={'Email adress'} type='email' state={email} setState={setEmail} />
          <Input Label={'Password'} type='password' state={password} setState={setPassword} />
          <button className="w-100 btn btn-lg btn-primary mt-4 " disabled={isLoading} onClick={loginHandler} type="submit">{isLoading ? 'Loading...': 'Login'}</button>
          <p className="mt-5 mb-3 text-muted">© 2023-2024</p>
        </form>
     </div>
      </main>
    </div>
  )
}

export default Login