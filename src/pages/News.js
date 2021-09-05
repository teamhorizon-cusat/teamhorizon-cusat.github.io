import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from "../components/Footer/Footer";
import NewsHeader from "../components/NewsHeader/NewsHeader";
import NewsPosts from "../components/NewsPosts/NewsPosts";



const News = () => {
    return(
        <div>
            <NavBar/>
            <NewsHeader/>
            <NewsPosts/>
            <Footer />
        </div>
    )
}

export default News;