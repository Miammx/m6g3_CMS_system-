import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/Home.module.css';
import { request } from "../lib/datocms";
import { Image } from "react-datocms";

const HOMEPAGE_QUERY = `
query MyQuery {
  allArticles {
    title
    author {
      name
    }
    content {
      value
    }
    coverImage {
     responsiveImage {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    excerpt
    id
    publishDate
    slug
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}

export default function Home (props) {
    const { data } = props;
    const posts = data.allArticles;
    console.log(data);
    return (
        <div className={styles.container}>
          <Head>
            <title>SPECIAL ASIAN RECIPES</title>
          </Head>
          <div>
            <h1 style={{fontSize: "50px", display: "flex", justifyContent: "center", marginBottom: "25px", fontWeight: 'bold', color:"orange"}}>Special Asian Recipes</h1>
          </div>
        <div style= {{width:"100%",display: "flex", gap: "10%", justifyContent: "space-between", padding: "20px"}}>
          {posts.map((p) => (
            <BlogPostPreview key={posts.id} data={p}/>
          ))}
        </div>
      </div>
  );
}

const BlogPostPreview = (props) => {
  const { data } = props;
  return (
    <div style={{width:"100%", justifyContent: "center", alignItems: "center"}}>
      <Image data={data.coverImage.responsiveImage}/>
        <Link href={`/blog/${data.slug}`} >
        <h2 style={{fontSize: "30px", fontWeight: 'bold'}}>
          {data.title}
          </h2> 
        </Link>
      <div style={{fontSize:"20px", marginBottom: "25px" }}> 
       {data.excerpt}
       <p>{data.publishDate}</p>
      </div>
      <div style={{fontSize:"20px", marginBottom: "95px" }}> 
        {data.author.name}</div>
      </div>
    );  
}