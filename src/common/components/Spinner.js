import React from "react"
import { Spinner, Row, Col } from "react-bootstrap"

export default function DefaultSpinner() {
	return (
		<Row className="justify-content-md-center">
			<Col md="auto">
				<Spinner animation="border" role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</Col>
		</Row>
	)
}
