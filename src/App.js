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

function App() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadAccount())
		dispatch(setChangeAccountListener())
	}, [])
	return (
		<div>
			<NavBar />
			<Container className="mt-4">
				<PostList />
			</Container>
		</div>
	)
}

export default App
