import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000'
})

export default {
    getData() {
        return instance.get('/products')
            .then((res => res.data))
    },
    getSpecificProduct(id) {
        return instance.get(`/products/${id}`).then(res => res.data)
    }
}