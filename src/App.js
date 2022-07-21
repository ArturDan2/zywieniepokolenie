//base components
import Nav from "./BasicComponents/Nav";
import Home from "./Pages/Home/Home";
import ArticlePage from "./Pages/Article/ArticlePage";
import ArticleListPage from "./Pages/ArticleList/ArticleListPage";
import AdminPanel from "./Admin Panel/AdminPanel";
//styles
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Footer from "./BasicComponents/Footer";
//Router
import {Routes, Route} from "react-router-dom";
//Custom hooks
import useGetPosts from "./useGetPosts";

const App = () => {

  const {posts} = useGetPosts()

  return (
   <MainContainer>
     <GlobalStyles/>
     <Nav/>
     <Routes>
       <Route path="/" element={<Home posts={posts}/>}/>
       <Route path="articles/:page" element ={<ArticleListPage posts={posts}/>}/>
       <Route path="article/:postId" element ={<ArticlePage posts={posts}/>}/>
       <Route path="about" element ={<Home posts={posts}/>}/>
       <Route path="goal" element ={<Home posts={posts}/>}/>
       <Route path="articles-section" element ={<Home posts={posts}/>}/>
       <Route path="contact" element ={<Home posts={posts}/>}/>
       <Route path="admin" element ={<AdminPanel/>}/>
     </Routes>
     <Footer/>
   </MainContainer>
  )
}

//styles
const MainContainer = styled.div`
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  flex-direction: space-between;
  overflow-x: hidden;
`

export default App;
