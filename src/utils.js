import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
    if(pathname === "/about"){
        window.scroll({
            top: 500,
            behavior: 'smooth'
        });
    }else if(pathname === "/goal"){
        window.scroll({
            top: 1300,
            behavior: 'smooth'
        })
    }else if (pathname === "/contact"){
        window.scroll({
            top: 3250,
            behavior: 'smooth'
        })
    }else{
        window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
