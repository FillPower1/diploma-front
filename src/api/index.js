import axios from 'axios'

export default {
	getData() {
		return axios.get('/items').then(res => res.data)
	},
	getSpecificProduct(id) {
		return axios.get(`/items/${id}`).then(res => res.data)
	},
	setOrder(userData, items) {
		const formData = {
			...userData,
			items
		}

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
			.catch(err => err.response.data)
	},
	registration(user) {
		return axios.post('/auth/register', user).then(res => res)
	},
	login(data) {
		return axios.post('/auth/login', data).then(res => res)
	},
	getProfile(token) {
		return axios.get('/user-profile', { headers: { 'Authorization': token } }).then(res => res)
	},
	updateProfile(id, data) {
		return axios.patch(`/user-profile/${id}`, data).then(res => res.data)
	},
	getCountOrders(email) {
		return axios.post(`/orders/count`, { email }).then(res => res.data)
	},
	getUsersOrders() {
		return axios.get('/orders/users').then(res => res.data)
	},
	updateUserOrder(id) {
		return axios.patch(`/orders/${id}`).then(res => res.data)
	},
	deleteUserOrder(id) {
		return axios.delete(`/orders/${id}`).then(res => res.data)
	},
	getNews() {
		return axios.get('/news').then(res => res.data)
	},
	getSpecificNews(id) {
		return axios.get(`/news/${id}`).then(res => res.data)
	},
	createNews(data) {
		const formData = new FormData()
		formData.append("image", data.file)
		formData.append("title", data.title)
		formData.append("description", data.description)

		return axios.post('/news', formData).then(res => res.data)
	},
	deleteNews(id) {
		return axios.delete(`/news/${id}`).then(res => res.data)
	},
	editNews(id, data) {
		const formData = new FormData()
		formData.append("image", data.file)
		formData.append("title", data.title)
		formData.append("description", data.description)

		return axios.patch(`/news/${id}`, formData).then(res => res.data)
	}
}
