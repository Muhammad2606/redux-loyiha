import React, { useEffect, useState } from 'react'
import { getArticlesDetilFailure, getArticlesDetilStart, getArticlesDetilSuccess, postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/articles'
import ArticlesService from '../service/articles'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CreateArticleInput from './create-article-input'

const EditArticle = () => {
    const [title, SetTitle] = useState('')
    const [description, SetDescription] = useState('')
    const [body, SetBody] = useState('')
    const dispatch = useDispatch()
    const { slug } = useParams()
    const navigate = useNavigate()




    useEffect(() => {

        const getArticleDetil = async () => {
            dispatch(getArticlesDetilStart())
            try {
                const response = await ArticlesService.getArticlesDetil(slug)
                dispatch(getArticlesDetilSuccess(response.article))
                SetTitle(response.article.title)
                SetDescription(response.article.description)
                SetBody(response.article.body)
            } catch (error) {
                dispatch(getArticlesDetilFailure())
            }
        }
        getArticleDetil()

    }, [])
    const formSubmit = async (e) => {
        e.preventDefault();
        const article = { title, description, body };
        dispatch(postArticleStart());
        try {
          await ArticlesService.editArticle(slug, article);
          dispatch(postArticleSuccess());
          navigate("/");
        } catch (error) {
          dispatch(postArticleFailure());
        }
      };

    const fromProps = { title, SetTitle, description, SetDescription, body, SetBody, formSubmit }


    return (
        <div className='text-center'>
            <h1 className="fs-2">  Edit article  </h1>
            <div className="w-75 mx-auto mt-5"></div>
            <CreateArticleInput {...fromProps} />
        </div>
    )
}

export default EditArticle