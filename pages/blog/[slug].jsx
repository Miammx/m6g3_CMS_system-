import { Image, StructuredText } from "react-datocms";
import Link from "next/link";
import styles from "../../styles/BlogPost.module.css";
import { request } from '../../lib/datocms';

export default function BlogPost(props) {
    const { postData } = props;
    return (
      <div className={styles.container}>
        <div style={{ maxWidth: "600px", marginTop: "20px", fontSize: "25px", fontWeight: "bold", padding: "20px", marginTop: "15px"}}>
          <Image data={postData.coverImage.responsiveImage} />
          <h1>{postData.title}</h1>
             </div>
        <div style={{ maxWidth: "600px", marginTop: "20px", fontSize: "25px"}}>
          <p>
            {postData.author.name} / {postData.publishDate}
          </p>
            </div>
        <div style={{ maxWidth: "600px", marginTop: "20px", fontSize: "20px", padding: "20px"}}>
          <StructuredText data={postData.content} 
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "ImageRecord":
                return <Image data={record.image.responsiveImage}/>;
              default:
                return null;
            }
          }}
        />
        <div style={{marginTop: "50px", fontSize: "20px"}}>
               <Link href="/">
                   <p>⬅️&nbsp;&nbsp;Back to the frontpage</p>
               </Link>
          </div>
        </div>
      </div>
    )
}

const PATHS_QUERY = `
query MyQuery {
  allArticles {
    slug
  }
}
`;
export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: PATHS_QUERY,
  });

let paths = [];
slugQuery.allArticles.map((p) => paths.push(`/blog/${p.slug}`));

return {
  paths,
  fallback: false,
 };
};

const ARTICLE_QUERY = `
  query MyQuery($slug: String) {
  article(filter: {slug: {eq: $slug}}) {
    author {
      name
    }
    content {
      value
      blocks {
        __typename
        ... on ImageRecord {
          id
          image { 
          	responsiveImage {
              width
              webpSrcSet
              title
              srcSet
              src
              sizes
              height
              bgColor
              base64
              aspectRatio
              alt
          	}
          }
        }
      }
    }
    coverImage {
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
        alt
      }
    }
    id
    publishDate
    slug
    title
  }
}
  `;
export const getStaticProps = async ({ params }) => {
  console.log(params)
  const post = await request({
    query: ARTICLE_QUERY,
    variables: { slug: params.slug },
  });

  return {
    props: {
      postData: post.article,
    },
  };
};
