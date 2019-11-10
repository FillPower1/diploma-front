import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

export default {
    getData() {
        return instance.get('/products')
            .then((res => res.data))
    },

    // getProductImage(url) {
    //     return instance.get(url).then(res => console.log(res))
    // }
}