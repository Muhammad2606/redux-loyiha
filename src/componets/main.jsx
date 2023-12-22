import { useSelector } from "react-redux"

const Main = () => {


  const {articles} = useSelector(state => state.article)

  return (
    <div className="container" >

      <div className="album py-5 ">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {articles.map(item =>(
                  
            <div className="col" key={item.id}>
              <div className="card shadow-sm h-100">
              <img src={item.author.image} className="img-fluid" alt="" />

                <div className="card-body">
                  <p className="card-text fw-bold text-capitalize"> {item.title} </p>
                  <p className="card-text"> {item.description.slice(0,140)} </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-success">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      <button type="button" className="btn btn-sm btn-outline-danger">Delete</button>
                    </div>
                    <small className="text-dark fw-bold">{item.author.username}</small>
                  </div>
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