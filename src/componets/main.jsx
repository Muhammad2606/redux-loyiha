import { useDispatch, useSelector } from "react-redux"
import { Loader } from '../ui'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { getArticleStart, getArticleSuccess } from "../slice/articles"
import ArticlesService from "../service/articles"
import { ArticleCard} from "./index.js";

const Main = () => {


  const { articles, isLoading } = useSelector(state => state.article)
 
  const dispatch = useDispatch()


  const getArticles = async () => {
    dispatch(getArticleStart())
    try {
      const response = await ArticlesService.getArticles()
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    getArticles()

  }, [])



  return (
    <div >
      {isLoading && <Loader />}
      <div className="album py-5 ">
        <div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {articles.map(item => (

              <ArticleCard item={item} getArticles={getArticles}/>
            
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

export default Main