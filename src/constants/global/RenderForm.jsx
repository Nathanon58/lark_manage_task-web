import { Col, Row } from "antd";
import { CheckboxTheme } from "../../components/forms/checkbox";
import { TextXSMall, TextSmall } from "../../components/forms/text";
import { ButtonCheckboxTheme } from "../../components/forms/buttonCheckbox";
import { DatePickerForm, RangePickerForm } from "../../components/forms/datePicker";
import { UploadComponent, UploadImageComponent } from "../../components/forms/upload";
import { InputAreaLabel, InputLabel, InputPassword, InputNumber } from "../../components/forms/input";
import { SelectDropdown, SelectMultiple, TreeSelectDropdown } from '../../components/forms/dropdown.js'

const RenderForm = ({ formList, setValue, getValues, errors, control, renderButton, spanSearch, styleRow, ...rest }) => {
	const stuff = {
		control,
		errors,
		getValues,
		setValue,
	}
	spanSearch = spanSearch ? spanSearch : 24
	return (
		<Row gutter={[16, 16]} style={styleRow}>
			{
				formList && formList.map(f => {
					return (
						<Col xs={{ span: 24 }} md={{ span: 24 }} xl={{ span: f.span }} lg={{ span: f.span }} style={{ ...f.style }}>
							{renderRequiredStyle(f.rules, f.label, f.showRequired, f.type)}
							{renderInputType(f, stuff)}
							{renderTextError(f.label, f.name, errors)}
						</Col>
					)
				})
			}
			<Col xs={{ span: 24 }} sm={{ span: 24 }} xl={{ span: spanSearch }} lg={{ span: spanSearch }} style={{ padding: 0, display: 'flex', marginTop: '2%' }} >{renderButton}</Col>
		</Row>
	)
}

const renderTextError = (label, name, errors) => {
	return (
		errors && errors[name] ?
			<TextXSMall color={'red'} text={renderTypeError(label, name, errors)} /> : ''
	)
}

const renderTypeError = (label, name, errors) => {
	switch (errors[name].type) {
		case 'required':
			return (`โปรดระบุ${label}`)
		case 'pattern':
			return errors[name].message ? errors[name].message : `รูปแบบ${label}ไม่ถูกต้อง`
		case 'maxLength':
			return (`ระบุไม่เกิน ${errors[name].message} ตัวอักษร`)
		case 'minLength':
			return (`ระบุไม่น้อยกว่า ${errors[name].message} ตัวอักษร`)
		case 'min':
			return (`โปรดระบุจำนวนไม่น้อยกว่า ${errors[name].message}`)
		case 'max':
			return (`โปรดระบุจำนวนไม่เกิน ${errors[name].message}`)
	}
}

const renderRequiredStyle = (rules, label, showRequired, type) => {
	return (
		type !== 'TEXT_DISPLAY' ?
			<div style={{ display: 'flex' }}>
				{
					(!!rules && rules.required) || showRequired ? <TextSmall text={`*`} color={'red'} /> : ''
				}
				<TextSmall text={label} />
			</div>
			: ''
	)
}

const renderInputType = (e, stuff) => {
	switch (e.type) {
		case 'INPUT':
			return (
				<InputLabel
					item={e}
					{...stuff}
				/>
			)
		case 'INPUT_NUMBER':
			return (
				<InputNumber
					item={e}
					{...stuff}
				/>
			)
		case 'INPUT_AREA':
			return (
				<InputAreaLabel
					item={e}
					{...stuff}
				/>
			)
		case 'INPUT_PASSWORD':
			return (
				<InputPassword
					item={e}
					{...stuff}
				/>
			)
		case 'SELECT':
			return (<SelectDropdown item={e}
				{...stuff} />)
		case 'MULTIPLE_SELECT':
			return (<SelectMultiple item={e}
				{...stuff} />)
		case 'TREE_SELECT':
			return (<TreeSelectDropdown item={e}
				{...stuff} />)
		case 'DATE_PICKER':
			return (<DatePickerForm item={e}
				{...stuff} />)
		case 'RANGE_PICKER':
			return (<RangePickerForm item={e}
				{...stuff} />)
		case 'CHECKBOX':
			return (<CheckboxTheme item={e}
				{...stuff} />)
		case 'UPLOAD_FILE':
			return (
				<UploadComponent item={e}
					{...stuff} />
			)
		case 'UPLOAD_IMAGE':
			return (
				<UploadImageComponent item={e}
					{...stuff} />
			)
		case 'TEXT_DISPLAY':
			return (
				<div style={{ display: 'flex' }}><TextSmall bold text={e.label} />: &nbsp;<TextSmall text={e.defaultValue} /></div>
			)
		case 'BUTTONCHECKBOX':
			return (<ButtonCheckboxTheme item={e}
				{...stuff} />
			)
	}
}

export default RenderForm