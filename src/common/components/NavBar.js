import React from "react"
import { Navbar, Badge } from "react-bootstrap"
import { useSelector } from "react-redux"
import {
	selectAccount,
	selectMetamaskLoadingStatus,
} from "features/metamask/metamaskSlice"

export default function NavBar() {
	const connectedAccount = useSelector(selectAccount)
	const loading = useSelector(selectMetamaskLoadingStatus)
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="#home">Dapp</Navbar.Brand>
			<Navbar.Collapse className="justify-content-end">
				<Navbar.Text className="text-light">
					<Badge variant="warning">{connectedAccount}</Badge>{" "}
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	)
}
