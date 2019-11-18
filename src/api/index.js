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
    async setOrder(userData, items) {
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

                    try {
                        const res = await this.registration(data)
                        return res
                    } catch (error) {
                        return console.log(error)
                    }
                }

                return res.data
            })

    },
    async registration(user) {
        try {
            const response = await axios.post('/auth/register', user)
            return response.data
        }
        catch (err) {
            return console.log(err)
        }
    }
}