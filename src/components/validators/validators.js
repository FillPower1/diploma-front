const required = value => (value || typeof value === 'number' ? undefined : 'Это обязательное поле')
const phoneNumber = value => (
	value && /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(value)
		? undefined
		: 'Неверный номер телефона'
)
const email = value => (
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Неверный адрес электронной почты'
		: undefined
)
const minLength = min => value =>
	value && value.length < min ? `Должно быть минимум ${min} символов или больше` : undefined
const minLength5 = minLength(5)
const minLength6 = minLength(6)

export {
	required,
	phoneNumber,
	email,
	minLength5,
	minLength6
}