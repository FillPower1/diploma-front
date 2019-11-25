import React from 'react'

const ProfileField = props => {
	const { title, label, name, editMode,
		onActivateEditMode, value,
		onFieldChange, onDeactivateEditMode } = props

	return (
		<li className="collection-item">
			{!editMode &&
                <>
                	<span>{title}: {label}</span>
                	<button
                		name={name}
                		onClick={onActivateEditMode} className="btn btn-small">
                        изменить
                	</button>
                </>
			}
			{editMode &&
                <>
                	<input
                		name={name}
                		autoFocus={true}
                		onChange={onFieldChange}
                		value={value}
                	/>
                	<button
                		name={name}
                		onClick={onDeactivateEditMode}
                		className="profile-btn btn-small">
                        сохранить
                	</button>
                </>
			}
		</li>
	)
}

export default ProfileField
