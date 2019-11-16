import axios from 'axios'

export default {
    getData() {
        return axios.get('/products')
            .then((res => res.data))
    },
    getSpecificProduct(id) {
        return axios.get(`/products/${id}`).then(res => res.data)
    }
}