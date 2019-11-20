import React from 'react'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div className="field">
		<input {...input} placeholder={label} type={type} className={`field__item ${touched && error ? ' error' : ''}`} />
		{touched &&
            ((error && <span className="field__error">{error}</span>))}
	</div>
)

export default renderField