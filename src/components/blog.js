import React from 'react'
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import { Link } from "gatsby";

const BlogContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    color: #000;
`;

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    max-width: 100%;
    margin-left: 20px;
    margin-top: 20px;
`;

const Container = styled.div`
    padding: 2px 16px;
`;

const Detail = styled.div`
    margin-top: 10px;
`;

const Paragraph = styled.div`
    text-align: center;
    width: 200px;
`;





const Blog = (props) => {

    const {data} = props;
    console.log("probando data ",data);
    return (
        <div>
            <BlogContainer>

                {data.allWordpress.edges.map((node, index) => {
                    return (
                        <Link to={`/${node.node.slug}/`}>
                            <Card key={index}>

                                {node.node.media !== null ? (
                                            <img src={node.node.media.guid.rendered}
                                                 style={{width: "250px", height: "250px"}}/>
                                        ): (
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WordPress.svg/1024px-WordPress.svg.png"
                                                 style={{width: "250px", height: "250px"}}/>
                                        )}
                            
                                <Container>
                                    <Detail>
                                        <span>Title: </span> <h3>{node.node.title}</h3>
                                    </Detail>
                                    <Detail>
                                         <span>Author:</span> <span>{node.node.author.name}</span>
                                    </Detail>
                                    
                                    <Detail>
                                        <Paragraph>
                                            {ReactHtmlParser(node.node.content)}
                                        </Paragraph>
                                    </Detail>
                                </Container>                                            
                             </Card>
                        </Link>
                    );
                })}
            </BlogContainer>
        </div>
    )
}

export default Blog
