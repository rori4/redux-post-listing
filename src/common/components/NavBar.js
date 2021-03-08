import { selectUserId } from "features/user/userSlice"
import React from "react"
import { Navbar } from "react-bootstrap"
import { useSelector } from "react-redux"

export default function NavBar() {
	const userId = useSelector(selectUserId)
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="#home">📈 Coinance</Navbar.Brand>
			<Navbar.Collapse className="justify-content-end">
				<Navbar.Text className="text-light">
					{userId ? `UserId: ${userId}` : "Please login first!"}
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	)
}
