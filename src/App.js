//base components
import { useState } from "react";
import Nav from "./BaseComponents/Nav";
import Home from "./Pages/Home/Home";
import Article from "./Pages/Article/Article";
import ArticleList from "./Pages/ArticleList/ArticleListPage"
//styles
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Footer from "./BaseComponents/Footer";
//Router
import {Routes, Route, Outlet, Link} from "react-router-dom";
//artciles
import Article1 from "./Pages/ArticlesHandmade/Article1";
import Article2 from "./Pages/ArticlesHandmade/Article2";
import Article3 from "./Pages/ArticlesHandmade/Article3";
import Article4 from "./Pages/ArticlesHandmade/Article4";
import Article5 from "./Pages/ArticlesHandmade/Article5";


const App = () => {
  const [articleIndex, setArticleIndex] = useState();
  
  return (
   <MainContainer>
     <GlobalStyles/>
     <Nav/>
     <Routes>
       <Route path="/" element={<Home articleIndex={articleIndex} setArticleIndex={setArticleIndex}/>}/>
       <Route path="articles" element ={<ArticleList/>}/>
       <Route path="article" element ={<Article articleIndex={articleIndex}/>}/>
       <Route path="about" element ={<Home/>}/>
       <Route path="goal" element ={<Home/>}/>
       <Route path="contact" element ={<Home/>}/>
       <Route path="article/1" element ={<Article1/>}/>
       <Route path="article/2" element ={<Article2/>}/>
       <Route path="article/3" element ={<Article3/>}/>
       <Route path="article/4" element ={<Article4/>}/>
       <Route path="article/5" element ={<Article5/>}/>
     </Routes>
     <Footer/>
   </MainContainer>
  )
}

//styles
const MainContainer = styled.div`
`
export default App;
