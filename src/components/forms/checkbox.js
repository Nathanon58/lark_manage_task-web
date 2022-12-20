import React from 'react';
import { compareRender } from '../../functions/fn';
import { Controller } from "react-hook-form";
import { Checkbox } from 'antd';

export const CheckboxTheme = React.memo(({ item, handleChange, control }) => {

	const { options } = item

	return (
		<>
			<Controller
				name={item.name}
				control={control}
				rules={item.rules}
				defaultValue={item.defaultValue}
				render={({ value, onChange }) => (
					options.map((opt, i) =>
						<Checkbox key={`CheckboxTheme_${i}`}
							checked={value}
							disabled={item.disabled}
							onChange={(e) => handleChange ? handleChange({ name: item.name, value: e.target.checked }) : onChange(e.target.checked)}>
							{/* onChange={e => onChange(e.target.checked)}> */}
							{opt.id}
						</Checkbox>
					)
				)}
			/>
		</>
	)
}, compareRender)