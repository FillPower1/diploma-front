import React from 'react'

const renderField = (props) => {
	const { input, label, type, meta: { touched, error } } = props

	return <div>
		<div className="field">
			<input
				{...input}
				placeholder={label}
				type={type} className={`field__item ${touched && error ? ' error' : ''}`}
			/>
			{touched &&
				((error && <span className="field__error">{error}</span>))}
		</div>
	</div>
}

export default renderField