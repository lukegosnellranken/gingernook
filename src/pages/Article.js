import FullArticle from "../components/full-article/FullArticle";
import FullArticleSideCard from "../components/full-article-side-card/FullArticleSideCard";
import './Article.css';

function Article() {
    return(
        <div id="div-full-article-page">
            <FullArticle/>
            <FullArticleSideCard/>
        </div>
    );
}

export default Article;