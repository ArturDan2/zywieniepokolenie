
    export const navScroll = (pathname, aboutRef, goalRef, articlesRef, contactRef) => {

        let mobileNav
        if(window.innerWidth <= 940){
            mobileNav = true
        }else{
            mobileNav = false
        }

        switch (mobileNav){
            case true: 
                switch(pathname){
                    case "/about":
                        window.scroll({ top: (aboutRef.current.offsetTop - 50), left: 0, behavior: 'smooth' });
                        break;
                    case "/goal":
                        window.scroll({ top: (goalRef.current.offsetTop - 50), left: 0, behavior: 'smooth' });
                        break;
                    case "/articles-section":
                        window.scroll({ top: (articlesRef.current.offsetTop - 50), left: 0, behavior: 'smooth' });
                        break;
                    case "/contact":
                        window.scroll({ top: (contactRef.current.offsetTop - 120), left: 0, behavior: 'smooth' })
                        break;
                    case "":
                        window.scrollTo(0, 0);
                        break;
                    default: return;
            }
            break;
            case false: 
                switch(pathname){
                    case "/about":
                        window.scroll({ top: (aboutRef.current.offsetTop), left: 0, behavior: 'smooth' })
                        break;
                    case "/goal":
                        window.scroll({ top: (goalRef.current.offsetTop), left: 0, behavior: 'smooth' })
                        break;
                    case "/articles-section":
                        window.scroll({ top: (articlesRef.current.offsetTop), left: 0, behavior: 'smooth' })
                        break;
                    case "/contact":
                        window.scroll({ top: (contactRef.current.offsetTop - 100), left: 0, behavior: 'smooth' })
                        break;
                    case "":
                        window.scrollTo(0, 0);
                        break;
                    default: return;
            }
            break;
            default: return;
        }
    }

