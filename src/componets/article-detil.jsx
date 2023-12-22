import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticlesService from "../service/articles";
import { useDispatch } from "react-redux";
import { getArticlesDetilFailure, getArticlesDetilStart, getArticlesDetilSuccess } from "../slice/articles";


const ArticleDetil = () => {

  const { slug } = useParams()
const dispatch = useDispatch(state => state.article)
  useEffect(() => {
    const getArticleDetil = async () => {
      dispatch(getArticlesDetilStart())
      try {
        const response = await ArticlesService.getArticlesDetil(slug)
        dispatch(getArticlesDetilSuccess(response.article))
        console.log(response);
      } catch (error) {
        dispatch(getArticlesDetilFailure())
       }
    }
    getArticleDetil()
  }, [slug])


  const id = useParams()
  console.log(id);
  return (
    <div>ArticleDetil</div>
  )
}

export default ArticleDetil