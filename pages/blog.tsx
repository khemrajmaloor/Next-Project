import React from 'react';
import Layout from "@/components/Layout";
import BlogPost from "@/components/BlogPost";
import BlogImage from "../public/images/scratcha.svg";

export default function Blog() {
    const blogPosts = [
        {
            slug: "primary1",
            image: BlogImage,
            title: "primary: What is Lorem Ipsum?",
            content: (
                <React.Fragment>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <mark>popularised in the 1960s</mark> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was <mark>popularised in the 1960s</mark> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </React.Fragment>
            )
        },
        {
            slug: "primary2",
            image: BlogImage,
            title: "primary2: What is Lorem Ipsum?",
            content: (
                <React.Fragment>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <mark>Prismic Blog Post</mark> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was <mark>popularised in the 1960s</mark> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </React.Fragment>
            )
        },
        {
            slug: "primary3",
            image: BlogImage,
            title: "primary3: What is Lorem Ipsum?",
            content: (
                <React.Fragment>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <mark>Prismic Blog Post</mark> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was <mark>popularised in the 1960s</mark> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </React.Fragment>
            )
        }
    ];

    return (
        <Layout>
            <BlogPost blogPosts={blogPosts} />
        </Layout>
    );
}
