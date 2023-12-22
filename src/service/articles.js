import axios from "./api"
const ArticlesService ={
    async getArticles(){
        const {data} = await axios.get('articles')
        return data
    },
    async getArticlesDetil(slug){
        const {data } =  await  axios.get(`/articles/${slug}`)
        return data
    }
}


export default ArticlesService