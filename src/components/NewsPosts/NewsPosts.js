import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import newsObject from '../../assets/content/newsContent.json'
import "./style.css";
import ScrollTrigger from 'react-scroll-trigger';


function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}


const NewsPosts = () => {
    const[animation,setAnim] = React.useState(false);
    const onEnterViewport = ()=>{
        setAnim(true);
      } 

    return(
        <Container fluid className="NewsArea">
        
        <hr/>
            {
                Object.entries(newsObject).map((newsItem,index) => (
                    <div className="individualpost">
                        <Row className="post">
                            <ScrollTrigger  onEnter={onEnterViewport} className="postscroll">
                                <Card className={animation?'card-anim':''}>
                                <Card.Body>
                                    <Card.Title>{newsItem[1].heading}</Card.Title>
                                    <Card.Subtitle>{formatDate(newsItem[1].date)}</Card.Subtitle>
                                    <Card.Text>
                                        {newsItem[1].description}
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            </ScrollTrigger>
                        </Row>
                        <hr/>
                    </div>
                ))
            }
        </Container>
    )
}

export default NewsPosts;