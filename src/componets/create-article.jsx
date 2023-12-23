import { useState } from "react";
import CreateArticleInput from "./create-article-input";

const CreateArticle = () => {

    const [title, SetTitle] = useState('')
    const [description, SetDescription] = useState('')
    const [body, SetBody] = useState('')

    const fromProps ={title, SetTitle,description,SetDescription,body,SetBody}

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