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
					</div>
				</div>
			</main> 
			);
	}

	export default BlogPost;
