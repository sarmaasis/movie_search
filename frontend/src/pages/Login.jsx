import { useState } from 'react'
import axios from 'axios'


function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		// const response = await fetch('http://13.127.208.70/api/login', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		email,
		// 		password,
		// 	}),
		// })

		const response = await axios.post('http://13.127.208.70:8000/api/login', {email: email, password: password})
		const data = await response.data
		if (data.token) {
			localStorage.setItem('token', data.token)
			window.location.href = './Search.jsx'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={loginUser}>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Login" />
			</form>
		</div>
	)
}

export default Login