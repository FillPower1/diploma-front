import axios from 'axios'

export default {
	async getData() {
		try {
			const response = await axios.get('/products')
			return response.data
		} catch (error) {
			return error.response
		}
	},
	async getSpecificProduct(id) {
		try {
			const res = await axios.get(`/products/${id}`)
			return res.data
		} catch (error) {
			return error.response
		}
	},
	async setOrder(userData, items) {
		const formData = {
			...userData,
			items
		}

		// console.log(formData)
		try {
			const res = await axios.post('/orders', formData);
			if (userData.register) {
				const data = {
					firstName: userData.username,
					lastName: userData.surname,
					email: userData.email
				}
				const response = await this.registration(data)
				return response.data;
			}

			return res.data
		}
		catch (err) {
			console.log(err)
			return err.response
		}

	},
	async registration(user) {
		try {
			const response = await axios.post('/auth/register', user)
			return response
		} catch (err) {
			return err.response
		}
	},
	async login(data) {
		try {
			const response = await axios.post('/auth/login', data)
			return response
		} catch (error) {
			return error.response
		}
	},
	async getProfile(token) {
		console.log(token)
		try {
			const response = await axios.get('/profile', {
				headers: {
					'Authorization': token
				}
			})

			return response
		} catch (error) {
			return error.response
		}
	}
}
