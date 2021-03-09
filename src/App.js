import React, { useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import { useDispatch } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import {
	loadAccount,
	setChangeAccountListener,
} from "./features/metamask/metamaskSlice"
import NavBar from "common/components/NavBar"
import PostList from "features/posts/PostList"
import UserInfo from "features/usersPage/UserInfo"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadAccount())
		dispatch(setChangeAccountListener())
	}, [])
	return (
		<Router>
			<NavBar />
			<Container className="mt-4">
				<Row>
					<Col>
						<Route path="/" component={PostList} exact />
						<Route path="/user/:userId" component={UserInfo} exact />
					</Col>
				</Row>
			</Container>
		</Router>
	)
}

export default App
