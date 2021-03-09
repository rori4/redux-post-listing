import DefaultSpinner from "common/components/Spinner"
import React from "react"
import { Card, ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectUserById, selectUsersFetching } from "./usersSlice"

export default function UserInfo(props) {
	const { userId } = useParams()
	const user = useSelector((state) => selectUserById(state, { id: userId }))
	const fetching = useSelector(selectUsersFetching)
	return (
		<>
			{!fetching && user ? (
				<Card className="mt-3 mb-3">
					<Card.Header>User Info</Card.Header>
					<Card.Body>
						<Card.Text>
							<ListGroup variant="flush">
								<ListGroup.Item>
									<strong>Name:</strong> {user.name}
								</ListGroup.Item>
								<ListGroup.Item>
									selectUsersFetching
									<strong>Address:</strong> {user.address.city},{" "}
									{user.address.street} {user.address.suite},{" "}
									{user.address.zipcode}
								</ListGroup.Item>
								<ListGroup.Item>
									<strong>Phone:</strong> {user.phone}
								</ListGroup.Item>
								<ListGroup.Item>
									<strong>Website:</strong>{" "}
									<a href={`https://${user.website}`}>{user.website}</a>
								</ListGroup.Item>
								<ListGroup.Item>
									<strong>Company:</strong> {user.company.name}
								</ListGroup.Item>
							</ListGroup>
						</Card.Text>
					</Card.Body>
				</Card>
			) : (
				<DefaultSpinner />
			)}
		</>
	)
}
