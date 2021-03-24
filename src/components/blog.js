import React from 'react'
import styled from "styled-components";

const BlogContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    color: #000;
`;

const ThumbsBlog = styled.div`
    width: 25%;
    color: #000;
`;

const Blog = (props) => {

    const {data} = props;
    console.log("probando data ",data);
    return (
        <div>
            <BlogContainer>

                {/*<ThumbsBlog>
         
                        <img src={data.allWordpress.edges[1].node.media.guid.rendered}
                            style={{width: "250px", height: "250px"}}/>
                        <span>Title: </span> <h1>{data.allWordpress.edges[1].node.title}</h1>
                        <span>Author:</span> <h1>{data.allWordpress.edges[1].node.author.name}</h1>
                        <p>{data.allWordpress.edges[1].node.content}</p>
                </ThumbsBlog> */}

                {data.allWordpress.edges.map((node, index) => {
                    return (
                        <ThumbsBlog key={index}>
                        <h1>test</h1>
                        {node.node.media !== null ? (
                            <img src={node.node.media.guid.rendered}
                            style={{width: "250px", height: "250px"}}/>
                        ): null}
                        <span>Title: </span> <h1>{node.node.title}</h1>
                        <span>Author:</span> <h1>{node.node.author.name}</h1>
                        <p>{node.node.content}</p>
                        
                    </ThumbsBlog>
                    );
                })}
            </BlogContainer>
        </div>
    )
}

export default Blog
