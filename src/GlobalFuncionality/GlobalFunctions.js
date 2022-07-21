

  export const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

  export const getDate = (post) => {
      if(post.date !== undefined){
       let date = post.timestamp.toDate();
       date = date.toLocaleDateString();
       return date
       }
      };
