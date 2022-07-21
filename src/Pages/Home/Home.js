import React, { useEffect, useRef} from "react";
import styled from "styled-components";
//components
import BannerComponent from "./Components/BannerComponent";
import AboutUs from "./Components/AboutUs";
import Facts from "./Components/Facts";
import Goal from "./Components/Goal";
import Articles from "./Components/Articles";
import ContactForm from "./Components/ContactForm";
//Location
import { useLocation } from "react-router-dom";
//Functionality
import { navScroll } from "./Funcionality/NavScrollFunction";



const Home = ({posts}) => {

    const aboutRef = useRef();
    const goalRef = useRef();
    const articlesRef = useRef();
    const contactRef = useRef();

    const {pathname} = useLocation();

    
    useEffect(()=> {
        navScroll(pathname,aboutRef, goalRef, articlesRef, contactRef)
    },[pathname]);

    return(
        <MainContainer>
            <BannerComponent/>
            <AboutUs id="/about" ref={aboutRef}/>
            <Facts id="/facts"/>
            <Goal id="/goal" ref={goalRef}/>
            <Articles id="/articles-section" posts={posts} ref={articlesRef}/>
            <ContactForm id="/contact" ref={contactRef}/>
        </MainContainer>
    )
}

//styles
const MainContainer = styled.div`
`
export default Home;