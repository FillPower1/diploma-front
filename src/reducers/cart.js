const initialState = {
    items: [
        {
            "id": 10,
            "title": "Магия утра. Как первый час дня определяет ваш успех",
            "author": "Хэл Элрод",
            "image": "https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_415/19063017-hel-elrod-magiya-utra.jpg",
            "price": 829,
            "rating": 1
        },
        {
            "id": 10,
            "title": "Магия утра. Как первый час дня определяет ваш успех",
            "author": "Хэл Элрод",
            "image": "https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_415/19063017-hel-elrod-magiya-utra.jpg",
            "price": 829,
            "rating": 1
        },
        {
            "id": 10,
            "title": "Магия утра. Как первый час дня определяет ваш успех",
            "author": "Хэл Элрод",
            "image": "https://cv1.litres.ru/pub/c/elektronnaya-kniga/cover_415/19063017-hel-elrod-magiya-utra.jpg",
            "price": 829,
            "rating": 1
        }
    ],
    isOpenModal: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, items: [...state.items, action.payload] }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case 'TOGGLE_SHOW_MODAL':
            return {
                ...state,
                isOpenModal: !state.isOpenModal
            }
        default:
            return state
    }
}

export default reducer