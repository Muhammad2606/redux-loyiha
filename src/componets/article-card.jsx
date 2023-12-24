import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticlesService from "../service/articles"

const ArticleCard = ({item,getArticles}) => {
  const { loggedIn, user } = useSelector(state => state.auth)

  const navigate = useNavigate()


  const deleteArticle = async slug =>{
    try {
        await ArticlesService.deleteArticle(slug)
        getArticles()
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="col" key={item.id}>
    <div className="card shadow-sm h-100">
      <img src={item.author.image} className="img-fluid" alt="" />

      <div className="card-body">
        <p className="card-text fw-bold text-capitalize"> {item.title} </p>
        <a target="_blank" href={item.description.slice(0, 140)} className="card-text m-0"> {item.description.slice(0, 140)} </a>
      </div>
      <div className="d-flex card-footer justify-content-between align-items-center">
        <div className="btn-group">
          <button onClick={() => navigate(`/article/${item.slug}`)} type="button" className="btn btn-sm btn-outline-success">View</button>
          {loggedIn && user.username === item.author.username && (
            <>
            
            <button type="button" className="btn btn-sm btn-outline-secondary"
            onClick={() => navigate(`/edit-article/${item.slug}`)}
            >Edit</button>
            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => deleteArticle(item.slug)}>Delete</button>
            </>
          )}
        </div>
        <small className="text-dark fw-bold">{item.author.username}</small>
      </div>
    </div>
  </div>
  )
}

export default ArticleCard