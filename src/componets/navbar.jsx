import { Link } from "react-router-dom"
import {logo} from '../constants'
import { useSelector } from "react-redux"
const Navbar = () => {
  const {loggedIn,user} = useSelector(state => state.auth)
  return (
    <div className="d-flex  navbar align-items-center pb-3 mb-4 border-bottom container pt-3">
        
        <Link to={'/'}  >
            <img src={logo} alt="" width={150}/>
        </Link>


      {loggedIn ? (
        <>
      <p className="fs-4 text-capitalize fw-bold">{user.username}</p>
      <button className="btn btn-danger">Longout </button>

        </>

)

        : (

      <>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/login'}>Login</Link>
        <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to={'/register'}>Register</Link>
   
      </nav>
      </>
        )
}


    </div>
  )
}

export default Navbar