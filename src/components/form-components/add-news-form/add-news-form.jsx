import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { required, minLength6 } from '../validators'
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

	if (props.role !== 'admin') {
		return <Redirect to="/" />
	}

	return (
		<form className="col s8 offset-s2 add-news-block" onSubmit={props.handleSubmit}>
			<h4 className="center-align">{props.title}</h4>
			<div className="row">
				<div className="file-field input-field">
					<div className="btn add-news-btn">
						<label>Загрузить изображение</label>
						<i className="material-icons left">backup</i>
						<Field name="file" component={FileInput} type="file" />
					</div>
					<div className="file-path-wrapper">
						<input className="file-path" type="text" />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
					<Field
						id="title"
						name="title"
						type="text"
						component={renderField}
						validate={[required, minLength6]}
						label="Заголовок"
					/>
				</div>
			</div>
			<div className="row">
				<div className="input-field col s12">
					<Field
						name="description"
						type="text"
						component="textarea"
						className="materialize-textarea news-descr"
						validate={[required]}
						placeholder="Описание новости"
					/>
				</div>
			</div>
			<button className="align-center btn btn-small">{props.submitLabel}</button>
		</form>
	)
}

const mapStateToProps = state => ({
	initialValues: {
		title: state.news.currentNews.title,
		description: state.news.currentNews.description,
	}
})

export default connect(mapStateToProps)(reduxForm({
	form: 'addNewsForm'
})(AddNewsForm))