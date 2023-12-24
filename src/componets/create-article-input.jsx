import { useSelector } from "react-redux";
import { Input , Textarea} from "../ui";

const CreateArticleInput = ({title,SetTitle,description,SetDescription,body,SetBody, formSubmit}) => {
  const {isLoading} = useSelector(state => state.article)
  return (
    <form onSubmit={formSubmit} className="d-flex flex-column gap-3">
    {/* <Input Label={'Title'} staet={title} setState={SetTitle} /> */}
    <Textarea Label={'title'} state={title} setState={SetTitle}/>
    <Textarea Label={'Description'} state={description} setState={SetDescription}/>
    <Textarea Label={'Body'} state={body} height="180px" setState={SetBody}/>
    <button className="w-100 btn btn-lg btn-primary  " type="submit" disabled={isLoading}> 
    {isLoading ? 'loading...' : 'Create'}
    </button>
</form>
  )  
}

export default CreateArticleInput