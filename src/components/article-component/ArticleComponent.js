import ArticleCard from "../article-card/ArticleCard";
import ArticleSideCard from "../article-side-card/ArticleSideCard";
import './ArticleComponent.css';

function ArticleComponent() {
    return(
        <div id="div-full-article-page">
            <div id="div-page-full-article">
                <ArticleCard/>
            </div>
            <div id="div-page-full-article-side-card">
                <ArticleSideCard/>
            </div>
        </div>
    );
}

export default ArticleComponent;