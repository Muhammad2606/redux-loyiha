import { Link, useNavigate } from "react-router-dom"
import { logo } from '../constants'
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../helpers/persistens-storege"
import { logoutUser } from "../slice/auth"
const Navbar = () => {
  const { loggedIn, user } = useSelector(state => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Longout = () => {
    removeItem('token')
    dispatch(logoutUser())
    navigate('/login')
  }

  return (
    <div className="d-flex w-100  justify-content-xxl-between justify-content-xl-between justify-content-lg-between justify-content-sm-center justify-content-md-between align-items-center pb-3 mb-4 border-bottom container pt-3 flex-sm-column  flex-column flex-md-row ">

      <Link to={'/'}  >
        <img src={logo} alt="" width={150} />
      </Link>


      {loggedIn ? (
        <div className="d-flex gap-3 text-center justify-center mt-3">
          <p className="fs-4 text-capitalize fw-bold">{user.username}</p>
          <div>
            <Link className="me-3 py-2 link-body-emphasis text-success text-decoration-none" to={'/create-article'}>Create article</Link>

            <button className="btn btn-danger" onClick={Longout}>Longout </button>
          </div>

        </div>

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



