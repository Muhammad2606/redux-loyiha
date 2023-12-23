import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticlesService from "../service/articles";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesDetilFailure, getArticlesDetilStart, getArticlesDetilSuccess } from "../slice/articles";
import moment from "moment";
import { Loader } from "../ui";


const ArticleDetil = () => {

  const { slug } = useParams()
  const dispatch = useDispatch()
  const { articlesDetil, isLoading } = useSelector(state => state.article)
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


  return isLoading ? (
    <Loader />
  ) : (
    articlesDetil !== null && (

      <div>

        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <div className="col mb-5">
            </div>
            <h1 className='fs-2 fw-bold'>{articlesDetil.title}</h1>
            <p className="col-md-8 fs-5">{articlesDetil.description}</p>
            <p className="">
              <span className="fw-bold"> Create at : </span> {moment(articlesDetil.createdAt).format('DD MMM, YYYY')}
            </p>


            <div className="row featurette  my-5 w-50 ">
              <div className="col-md-7 order-md-2 d-flex align-item-center justify-content-center flex-column ">
                <h2 className="featurette-heading"> {articlesDetil.author.username}  </h2>
                <p className="lead"> <span className="fw-bold">Tagist</span>   #{articlesDetil.tagList[0] ? articlesDetil.tagList[0]  : 'marvel' }  </p>
                <i> 💙  {articlesDetil.favoritesCount},k </i>
              </div>
              <div className="col-md-5 order-md-1">

                <img className="img-fluid  border rounded-circle border-5 rounded w-75  mx-auto d-block  " src={articlesDetil.Image ? articlesDetil.Image :articlesDetil.author.image   } alt={articlesDetil.title} title={articlesDetil.title} />

              </div>
            </div>

            <p>{articlesDetil.body}</p>
          </div>
        </div>

      </div>

    )
  )
}

export default ArticleDetil


