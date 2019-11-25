import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import renderField from '../render-field'
import './add-news-form.scss'

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const FileInput = ({
	input: { value: omitValue, onChange, onBlur, ...inputProps },
	meta: omitMeta,
	...props
}) => {
	return (
		<input
			onChange={adaptFileEventToValue(onChange)}
			onBlur={adaptFileEventToValue(onBlur)}
			type="file"
			{...props.input}
			{...props}
		/>
	)
}

const AddNewsForm = props => {
	return (
		<form className="col s8 offset-s2 add-news-block" onSubmit={props.handleSubmit}>
			<div className="file-field input-field">
				<h5 className="add-news-img">Выберите изображение</h5>

				<div className="btn-small add-news-btn">
					<label>Загрузить</label>
					<Field name="file" component={FileInput} type="file" />
				</div>

				<div className="file-path-wrapper">
					<input className="file-path" type="text" />
				</div>
			</div>
			<div className="row">
				<h5 className="add-news__title">Заголовок</h5>
				<div className="input-field col s12">
					<Field
						name="title"
						type="text"
						component={renderField}
						label="Заголовок"
						placeholder="Заголовок"
					/>
				</div>
			</div>
			<div className="row">
				<h5 className="add-news__title">Описание новости</h5>
				<div className="input-field col s12">
					<Field
						name="description"
						type="text"
						component="textarea"
						label="Описание"
						placeholder="Описание"
						className="materialize-textarea news-descr"
					/>
				</div>
			</div>
			<button className="align-center btn btn-small">Отправить</button>
		</form>
	)
}



export default connect()(reduxForm({
	form: 'addNewsForm'
})(AddNewsForm))