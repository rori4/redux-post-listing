import React from "react"
import { Spinner } from "react-bootstrap"

export default function DefaultSpinner() {
	return (
		<Spinner animation="border" role="status">
			<span className="sr-only">Loading...</span>
		</Spinner>
	)
}
