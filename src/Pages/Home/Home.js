import React from "react";
import styled from "styled-components";
//components
import BannerComponent from "./Components/BannerComponent";
import AboutUs from "./Components/AboutUs";
import Facts from "./Components/Facts";
import Goal from "./Components/Goal";
import Articles from "./Components/Articles";
import ContactForm from "./Components/ContactForm";
import ScrollToTop from "../../utils";
import ScrollHome from "../../utils";

const Home = ({articleIndex, setArticleIndex}) => {
    return(
        <MainContainer>
            <ScrollHome/>
            <ScrollToTop/>
            <BannerComponent/>
            <AboutUs/>
            <Facts/>
            <Goal/>
            <Articles articleIndex={articleIndex} setArticleIndex={setArticleIndex}/>
            <ContactForm></ContactForm>
        </MainContainer>
    )
}

//styles
const MainContainer = styled.div`
`
export default Home;