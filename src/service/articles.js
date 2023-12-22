import axios from "./api"
const ArticlesService ={
    async getArticles(){
        const {data} = await axios.get('articles')
        return data
    }
}

export default ArticlesService