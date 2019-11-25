import React from 'react'

const RenderFieldWithAnim = (props) => {
	const { input, id, label, type, meta: { touched, error } } = props

	return <div>
		<div className="field input-field">
			<input
				id={id}
				{...input}
				type={type} className={`field__item ${touched && error ? ' error' : ''}`}
			/>
			<label htmlFor={id}>{label}</label>
			{touched &&
				((error && <span className="field__error">{error}</span>))}
		</div>
	</div>
}

export default RenderFieldWithAnim