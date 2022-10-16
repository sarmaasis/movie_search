import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
	const navigate = useNavigate()

	const [username, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		// const response = await fetch('http://13.127.208.70:8000/api/register', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/x-www-form-urlencoded',
		// 	},
		// 	body: JSON.stringify({
		// 		username: username,
		// 		email: email,
		// 		password: password,
		// 	}),
		// })
		const response = await axios.post('http://13.127.208.70:8000/api/register', {username: username, email: email, password: password})
		
		const data = response.data

		if (data.msg === "User Created") {
			navigate('./Login.jsx')
		}
		else{
			alert(data.msg)
		}
	}

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					value={username}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Username"
				/>
				<br />
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
				<input type="submit" value="Register" />
			</form>
		</div>
	)
}

export default Register