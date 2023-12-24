import { Route, Routes } from "react-router-dom"
import { ArticleDetil,  CreateArticle,  EditArticle,  Login, Main, Navbar, Register } from "./componets"
import AuthService from "./service/auth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { signUserSuccess } from "./slice/auth"
import { getItem } from "./helpers/persistens-storege"


const App = () => {

  const dispatch = useDispatch()
  const getUser  = async () =>{
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log('error');
    }
  }

   

  useEffect(() => {
    const token =getItem('token')
    if(token){

      getUser()
    }
  }, [])
  


  return (
    <div>
      <Navbar/>
      <div className="container"> 
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/article/:slug' element={<ArticleDetil />} />
        <Route path='/create-article' element={<CreateArticle />} />
        <Route path='/edit-article/:slug' element={<EditArticle/>} />
      </Routes>
      </div>
    </div>
  )
}

export default App