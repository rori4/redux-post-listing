import React from "react"
import { Navbar, Badge } from "react-bootstrap"
import { useSelector } from "react-redux"
import { selectAccount } from "features/metamask/metamaskSlice"
import { useHistory } from "react-router-dom"

export default function NavBar() {
	const history = useHistory()
	const connectedAccount = useSelector(selectAccount)
	// const loading = useSelector(selectMetamaskLoadingStatus)
	//TODO: use the loading
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand
				onClick={() => history.push("/")}
				style={{ cursor: "pointer" }}
			>
				Dapp
			</Navbar.Brand>
			<Navbar.Collapse className="justify-content-end">
				<Navbar.Text className="text-light">
					<Badge variant="warning">{connectedAccount}</Badge>{" "}
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	)
}
