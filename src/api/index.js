import axios from 'axios'

export default {
    getData() {
        return axios.get('http://localhost:3000/products')
            .then((res => res.data))
    }
}