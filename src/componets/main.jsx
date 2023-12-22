import { useSelector } from "react-redux"
import {Loader} from '../ui'

const Main = () => {


  const {articles,isLoading} = useSelector(state => state.article)

  return (
    <div className="container" >
    { isLoading &&   <Loader/>}
      <div className="album py-5 ">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {articles.map(item =>(
                  
            <div className="col" key={item.id}>
              <div className="card shadow-sm h-100">
              <img src={item.author.image} className="img-fluid" alt="" />

                <div className="card-body">
                  <p className="card-text fw-bold text-capitalize"> {item.title} </p>
                  <p className="card-text m-0"> {item.description.slice(0,140)} </p>
                </div>
                  <div className="d-flex card-footer justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-success">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                    </div>
                    <small className="text-dark fw-bold">{item.author.username}</small>
                  </div>
              </div>
            </div>
                ))}
          </div>
        </div>
       
      </div>

    </div>
  )
}

export default Main