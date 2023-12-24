import { useState } from "react";
import CreateArticleInput from "./create-article-input";
import ArticlesService from "../service/articles";
import { useDispatch } from "react-redux";
import { postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/articles";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {

    const [title, SetTitle] = useState('')
    const [description, SetDescription] = useState('')
    const [body, SetBody] = useState('')
    // const [Image, SetImage] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    
    const formSubmit = async e =>{
     
      e.preventDefault()
      const article = {title, description, body}
      dispatch(postArticleStart())


      try {
        await  ArticlesService.postArticle(article)
        dispatch(postArticleSuccess())
        navigate('/')
      } catch (error) {
        dispatch(postArticleFailure())
        console.log(error);
      }
    }
    const fromProps ={title, SetTitle,description,SetDescription,body,SetBody,formSubmit}

  return (
    <div className="text-center ">
        <h1 className="fs-2">  Create article  </h1>
        <div className="w-75 mx-auto mt-5">
        <CreateArticleInput {...fromProps} />
        </div>
    </div>
  )
}

export default CreateArticle