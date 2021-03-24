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

const ThumbsBlog = styled.div`
    width: 50%;
    color: #000;
    border: 2px solid #000;
    margin-left: 10px;
`;

const DetailPost = styled.div`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

const Detail = styled.div`
    width: 100%;
    text-align: center;
`;

const PreText = styled.div`
    margin-top: 8px;
    width: 100%;
    text-align: center;
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
                            <ThumbsBlog key={index}>
                                <DetailPost>

                                    <Detail>
                                    {node.node.media !== null ? (
                                        <img src={node.node.media.guid.rendered}
                                             style={{width: "250px", height: "250px"}}/>
                                ): (
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WordPress.svg/1024px-WordPress.svg.png"
                                         style={{width: "250px", height: "250px"}}/>
                                )}
                                    </Detail>
        
                                    <Detail>
                                        <span>Title: </span> <h3>{node.node.title}</h3>
                                    </Detail>

                                    <Detail>
                                        <span>Author:</span> <span>{node.node.author.name}</span>
                                    </Detail>

                                    <PreText>
                                    {ReactHtmlParser(node.node.content)}
                                    </PreText>
                    
                                </DetailPost>
                             </ThumbsBlog>
                        </Link>
                    );
                })}
            </BlogContainer>
        </div>
    )
}

export default Blog
