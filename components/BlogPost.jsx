import React from 'react';
import Image from "next/image";
function BlogPost({ blogPosts }) {
    return (
		<main className="layout">
			<div className="layout__content">
				<div className="blog">
					<div className="blog__heading">
						<h2>Prismic Blog Post</h2> 
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates animi repudiandae in, mollitia deserunt beatae ad dignissimos tempora iste, consectetur facilis itaque non ipsa corporis ullam voluptatum laborum labore aut.</p>
					</div>
					{blogPosts.map(post => (
						<div className="blog__content"  key={post.slug}>
							<div className="blog__content__items">
								<Image
									src={post.image}
									alt="Picture of the author"
									className="blog__image"
								/>
								<div className="blog__content__items__title">
									<h3>{post.title}</h3>
									<p className="blog__content__items__desc">{post.content}</p>
								</div>
							</div>
						</div>
					))}
					{/* <div className="blog__content">
						<div className="blog__content__items">
							<Image
								src={BlogImage}
								alt="Picture of the author"
								className="blog__image"
							/>
							<div className="blog__content__items__title">
								<h3>What is Lorem Ipsum?</h3>
								<p className="blog__content__items__desc">____Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<mark>Prismic Blog Post</mark> when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was <mark>popularised in the 1960s </mark>with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
							</div>
						</div>
					</div>
					*/}
				</div>
			</div>
		</main> 
    );
}

export default BlogPost;
