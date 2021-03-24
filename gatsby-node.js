/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const fetch = require('node-fetch');
const { resolve } = require('path');
const base_url = "http://jorgelbou-saad.com/testwordpress/wp-json"; 

const path = require("path");


exports.sourceNodes = async ({
    actions: { createNode },
    createContentDigest,
  }) => {
    // get data from GitHub API at build time
    const result = await fetch(`${base_url}/wp/v2/posts`)
    const resultData = await result.json();
    //console.log(resultData);
    // create node for build time data example in the docs

    for(const element of resultData){

      //SE OBTIENE EL AUTOR
      let autorData;
      let url = `${base_url}/wp/v2/users/${element.author}`
      console.log("probando endpoint de user ",url);
      let resultAutor = await fetch(url);
      autorData = await resultAutor.json();
      let mediaData = null;

      //SE OBTIENE LA INFORMACIÓN DE MEDIA
      
      if(element.featured_media > 0){
        let url = `${base_url}/wp/v2/media/${element.featured_media}`;
        let resultMedia = await fetch(url);
        console.log("probando url media ",url);
        mediaData = await resultMedia.json();
        mediaData.author = autorData;
      }

      console.log("probando autor ",autorData);

      createNode({
          id: "post-"+ element.id,
          slug: element.slug,
          date: element.date,
          date_updated: element.modified,
          status: element.status,
          title: element.title.rendered,
          content: element.content.rendered,
          author: autorData,
          media: mediaData,
          internal: {
            type: `Wordpress`,
            contentDigest: createContentDigest(resultData),
          },
      });

    }
  }

  exports.createPages = ({graphql, actions }) => {

    const {createPage} = actions;
    return graphql(`
        {
          allWordpress(sort: {fields: [date]}) {
                  edges {
                        node {
                              id
                              title
                              date
                              date_updated
                              slug
                              status
                              media {
                                  id
                                  guid {
                                      rendered
                                  }
                              }
                              content
                              author {
                                id
                                name
                              }
                          } 
                    }
          }
        }`).then((result) => {
          
            result.data.allWordpress.edges.forEach(element => {
                
                createPage({
                  path: element.node.slug,
                  component: path.resolve("./src/templates/blog-post.js"),
                  context: {
                    slug: element.node.slug,
                    title: element.node.title,
                    date: element.node.date,
                    date_updated: element.node.date_updated,
                    status: element.node.status,
                    author: element.node.author,
                    media: element.node.media
                  }
                })
            });
        });

      
  }

