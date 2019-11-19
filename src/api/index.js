import axios from 'axios'

export default {
	getData() {
		return axios.get('/products')
			.then((res => res.data))
	},
	async getSpecificProduct(id) {
		const res = await axios.get(`/products/${id}`)
		return res.data
	},
	setOrder(userData, items) {
		const formData = {
			...userData,
			items
		}

		// console.log(formData)
		return axios.post('/orders', formData)
			.then(async res => {
				if (userData.register) {
					const data = {
						firstName: userData.username,
						lastName: userData.surname,
						email: userData.email
					}

					const response = await this.registration(data)
					return response.data
				}

				return res.data
			})
			.catch(err => console.log(err))

	},
	async registration(user) {
		try {
			const response = await axios.post('/auth/register', user)
			console.log(response)
			return response
		} catch (err) {
			return err.response
		}
	}
}
