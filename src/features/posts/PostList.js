import DefaultSpinner from "common/components/Spinner"
import React from "react"
import { Card, Button, Badge, Container } from "react-bootstrap"
import { PersonFill } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import { selectPosts, selectPostsLoading } from "./postsSlice"

export default function PostList() {
	const posts = useSelector(selectPosts)
	return (
		<>
			{posts.length !== 0 ? (
				posts.map((post) => (
					<Card className="mt-3 mb-3" key={post.id}>
						<Card.Header>
							<Button variant="primary">
								Author Page <PersonFill />
							</Button>
						</Card.Header>
						<Card.Body>
							<Card.Title>{post.title}</Card.Title>
							<Card.Text>{post.body}</Card.Text>
						</Card.Body>
					</Card>
				))
			) : (
				<DefaultSpinner className="full" />
			)}
		</>
	)
}
