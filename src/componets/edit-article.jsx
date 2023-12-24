import React, { useEffect, useState } from 'react'
import { getArticlesDetilFailure, getArticlesDetilStart, getArticlesDetilSuccess } from '../slice/articles'
import ArticlesService from '../service/articles'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import CreateArticleInput from './create-article-input'

const EditArticle = () => {
    const [title, SetTitle] = useState('')
    const [description, SetDescription] = useState('')
    const [body, SetBody] = useState('')
    const dispatch = useDispatch()
    const { slug } = useParams()



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
    const formSubmit = () =>{}

    const fromProps ={title,SetTitle,description,SetDescription,body,SetBody,formSubmit}


    return (
        <div className='text-center'>
            <h1 className="fs-2">  Edit article  </h1>
            <div className="w-75 mx-auto mt-5"></div>
            <CreateArticleInput {...fromProps} />
        </div>
    )
}

export default EditArticle