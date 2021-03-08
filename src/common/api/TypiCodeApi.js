class TypiCodeApi {
	constructor() {
		this.SERVER_ENDPOINT = "https://jsonplaceholder.typicode.com/"
	}

	fetchPosts = () => {
		return fetch(`${this.SERVER_ENDPOINT}/posts`, {
			method: "GET",
		})
	}

	fetchUsers = () => {
		return fetch(`${this.SERVER_ENDPOINT}/users`, {
			method: "GET",
		})
	}
}

export default TypiCodeApi
