import React from 'react';
import { Card } from 'react-bootstrap';
import newsObject from '../../assets/content/newsContent.json'
import "./style.css";
import ScrollTrigger from 'react-scroll-trigger';


function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}


const NewsPosts = () => {
    const[anim,setAnim] = React.useState(false);
    const onEnterViewport = ()=>{
        setAnim(true);
      } 

    return(
        <div className="NewsArea">
        
        <hr/>
            {
                Object.entries(newsObject).map((newsItem,index) => (
                    <ScrollTrigger className="mx-auto" onEnter={onEnterViewport} >
                        <Card className={anim?'card-anim':''}>
                        <Card.Body>
                            <Card.Title>{newsItem[1].heading}</Card.Title>
                            <Card.Subtitle>{formatDate(newsItem[1].date)}</Card.Subtitle>
                            <Card.Text>
                                {newsItem[1].description}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </ScrollTrigger>
                ))
            }
        </div>
    )
}

export default NewsPosts;