import DefaultSpinner from "common/components/Spinner"
import React from "react"
import { Card, Button, Badge, Row, Col } from "react-bootstrap"
import { PersonFill } from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import { selectPosts, selectPostsFetching } from "./postsSlice"
import { useHistory } from "react-router-dom"

export default function PostList() {
	const history = useHistory()
	const posts = useSelector(selectPosts)
	const fetching = useSelector(selectPostsFetching)
	return (
		<>
			{!fetching ? (
				posts.map((post) => (
					<Card className="mt-3 mb-3" key={post.id}>
						<Card.Header>
							<Button
								variant="primary"
								onClick={() => history.push(`/user/${post.userId}`)}
							>
								Author Page <PersonFill />{" "}
								<Badge variant="light">{post.userId}</Badge>
							</Button>
						</Card.Header>
						<Card.Body>
							<Card.Title>{post.title}</Card.Title>
							<Card.Text>{post.body}</Card.Text>
						</Card.Body>
					</Card>
				))
			) : (
				<DefaultSpinner />
			)}
		</>
	)
}
