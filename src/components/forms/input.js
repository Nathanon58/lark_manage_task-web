import { Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';
import { compareRender } from '../../functions/fn';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export const InputLabel = React.memo(({ item, control, setValue }) => {
	return (
		<Controller
			control={control}
			name={item.name}
			rules={item.rules}
			defaultValue={item.defaultValue}
			render={({ field: { onChange, value } }) => {
				return (
					<Input
						name={item.name}
						prefix={item.prefix}
						value={value}
						disabled={item.disabled}
						placeholder={item.placeholder}
						onChange={item.onChangeCustom ? e => item.onChangeCustom(e.target.name, e.target.value) : onChange}
						style={{ margin: '5px 0px', borderRadius: '10px' }}
					/>
				)
			}}
		/>
	)
}, compareRender)

export const InputNumber = React.memo(({ item, onChange, control }) => {
	return (
		<Controller
			control={control}
			name={item.name}
			rules={item.rules}
			defaultValue={item.defaultValue}
			render={({ onChange, value }) => (
				<Input
					name={item.name}
					prefix={item.prefix}
					value={value}
					type={'number'}
					disabled={item.disabled}
					placeholder={item.placeholder}
					onChange={item.onChangeCustom ? e => item.onChangeCustom(e.target.name, e.target.value) : e => onChange(e.target.value)}
					style={{ margin: '5px 0px', borderRadius: '10px' }}
				/>
			)}
		/>
	)

},
	compareRender
)

export const InputPassword = React.memo(({ item, control }) => {
	return (
		<Controller
			control={control}
			name={item.name}
			rules={item.rules}
			value={item.value}
			defaultValue={item.defaultValue}
			render={({ onChange, value }) => (
				<Input.Password
					iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
					name={item.name}
					prefix={item.prefix}
					value={value}
					disabled={item.disabled}
					placeholder={item.placeholder}
					onChange={e => onChange(e.target.value)}
					style={{ margin: '5px 0px', borderRadius: '10px' }}
				/>
			)}
		/>
	)

}, compareRender)


export const InputAreaLabel = ({ item, control }) => {
	return (
		<Controller
			control={control}
			name={item.name}
			rules={item.rules}
			defaultValue={item.defaultValue}
			render={({ onChange, value }) => (
				<textarea
					// type="textarea"
					className="ant-input"
					name={item.name}
					value={value}
					onChange={item.onChangeCustom ? e => item.onChangeCustom(e.target.name, e.target.value) : e => onChange(e.target.value)}
					rows={6}
					maxLength={100}
					placeholder={item.placeholder || 'กรอกได้สูงสุด 100 ตัวอักษร'}
					style={{ margin: '5px 0px', borderRadius: '10px', width: '100%' }}
				/>
				// <Input.TextArea
				// 	name={item.name}
				// 	id={item.name}
				// 	prefix={item.prefix}
				// 	value={value}
				// 	// onChange={item.onChangeCustom ? e => item.onChangeCustom(e.target.name, e.target.value) : e => onChange(e.target.value)}
				// 	onChange={() => test()}
				// 	// value={value || item.defaultValue}
				// 	disabled={item.disabled}
				// 	placeholder={item.placeholder}
				// 	rows={6}
				// 	showCount
				// 	maxLength={100}
				// 	style={{ margin: '5px 0px', borderRadius: '10px' }}
				// />
			)}
		/>
	)

}