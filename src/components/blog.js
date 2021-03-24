import React from 'react'
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";

const BlogContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    color: #000;
`;

const ThumbsBlog = styled.div`
    width: 25%;
    color: #000;
    border: 2px solid #000;
    margin-left: 10px;
`;

const Blog = (props) => {

    const {data} = props;
    console.log("probando data ",data);
    return (
        <div>
            <BlogContainer>

                {data.allWordpress.edges.map((node, index) => {
                    return (
                        <ThumbsBlog key={index}>
                        {node.node.media !== null ? (
                            <img src={node.node.media.guid.rendered}
                            style={{width: "250px", height: "250px"}}/>
                        ): (
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WordPress.svg/1024px-WordPress.svg.png"
                            style={{width: "250px", height: "250px"}}/>
                        )}
                        <span>Title: </span> <h3>{node.node.title}</h3>
                        <span>Author:</span> <span>{node.node.author.name}</span>
                        <p>{ReactHtmlParser(node.node.content)}</p>
                        
                    </ThumbsBlog>
                    );
                })}
            </BlogContainer>
        </div>
    )
}

export default Blog
