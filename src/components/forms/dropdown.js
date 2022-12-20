import React from 'react';
import { Select, TreeSelect } from 'antd';
import { Controller } from 'react-hook-form';
const { SHOW_PARENT } = TreeSelect;

// export const SelectDropdown = React.memo(({ item, control, setValue }) => {
// 	const [value, setValueInside] = useState('')

// 	useEffect(() => {
// 		setValueInside(item.defaultValue)
// 		setValue(item.name, item.defaultValue)
// 	}, [item.defaultValue])

// 	const handleChange = (val) => {
// 		setValueInside(val)
// 		setValue(item.name, val)
// 	}
// 	return (
// 		<Fragment>
// 			<Controller
// 				name={item.name}
// 				control={control}
// 				rules={item.rules}
// 				defaultValue={value}
// 				render={({ onFocus, onBlur, onSearch }) => {
// 					return (
// 						<Select
// 							showSearch
// 							showArrow
// 							placeholder={item.placeholder}
// 							optionFilterProp="children"
// 							onSearch={onSearch}
// 							onFocus={onFocus}
// 							defaultValue={value}
// 							value={value || item.defaultValue}
// 							disabled={item.disabled}
// 							onBlur={onBlur}
// 							style={{ width: '100%', margin: '5px 0px', borderRadius: '10px' }}
// 							onChange={item.onSelect ? (e) => item.onSelect(e, item.name, setValue) : (e) => handleChange(e)}
// 							// onSelect={(val, option) => onSelect && onSelect({ name: item.name, option })}
// 							// filterOption={(input, option) =>
// 							// 	option.children.indexOf(input.toLowerCase()) >= 0
// 							// }
// 							notFoundContent={null}
// 						>
// 							{!!item.options && item.options.map((_option, _idxO) => {
// 								return (
// 									<Select.Option key={Number(_idxO)}
// 										others={_option.others || null}
// 										value={_option.value}>
// 										{_option.label}
// 									</Select.Option>
// 								)
// 							})}
// 						</Select>
// 					)
// 				}}
// 			/>
// 		</Fragment>
// 	);

// }, (prevProps, nextProps) => {
// 	return false
// }
// 	//  [prevProps.value[prevProps.item.options] !== nextProps.value[nextProps.item.options]]
// )

export const SelectDropdown = React.memo(({ item, onSelect, control, setValue }) => {
	return (
		<Fragment>
			<Controller
				name={item.name}
				control={control}
				rules={item.rules}
				defaultValue={item.defaultValue}
				render={({ field: { onChange, onFocus, onBlur, onSearch, value } }) => (
					<Select
						showSearch
						showArrow
						placeholder={item.placeholder}
						optionFilterProp="children"
						onSearch={onSearch}
						onFocus={onFocus}
						defaultValue={item.defaultValue}
						value={value || item.defaultValue}
						disabled={item.disabled}
						onBlur={onBlur}
						style={{ width: '100%', margin: '5px 0px', borderRadius: '10px' }}
						onChange={item.onSelect ? (e) => item.onSelect(e, item.name, setValue) : onChange}
						onSelect={(val, option) => onSelect && onSelect({ name: item.name, option })}
						// filterOption={(input, option) =>
						// 	option.children.indexOf(input.toLowerCase()) >= 0
						// }
						notFoundContent={null}
					>
						{!!item.options && item.options.map((_option, _idxO) => {
							return (
								<Select.Option key={Number(_idxO)}
									others={_option.others || null}
									value={_option.value}>
									{_option.label}
								</Select.Option>
							)
						})}
					</Select>
				)}
			/>
		</Fragment>
	);

}, false)
//  [prevProps.value[prevProps.item.options] !== nextProps.value[nextProps.item.options]]

export const TreeSelectDropdown = React.memo(({ item, onSelect, control, setValue, options, onChangeCustom }) => {
	return (
		<Fragment>
			<Controller
				name={item.name}
				control={control}
				rules={item.rules}
				// value={item.value}
				defaultValue={item.defaultValue}
				render={({ field: { onChange, onFocus, onBlur, onSearch, value } }) => (
					<TreeSelect
						treeData={item.options}
						value={item.value}
						onChange={item.onChangeCustom}
						treeCheckable={true}
						showCheckedStrategy={SHOW_PARENT}
						placeholder={`กรุณาเลือก${item.label}`}
						style={{
							width: '100%',
							margin: '5px 0px',
						}}
					/>
				)}
			/>
		</Fragment>
	);

}, (prevProps, nextProps) => {
	return false
}
	//  [prevProps.value[prevProps.item.options] !== nextProps.value[nextProps.item.options]]
)

export const SelectMultiple = React.memo(({ item, onSelect, control }) => {
	return (
		<Fragment>
			<Controller
				name={item.name}
				control={control}
				rules={item.rules}
				defaultValue={item.value}
				render={({ field: { onChange, onFocus, onBlur, onSearch, value } }) => (
					<Select
						mode="multiple"
						showArrow={item.disabled ? false : true}
						// tagRender={tagRender}
						defaultValue={item.defaultValue}
						options={item.options}
						value={value}
						disabled={item.disabled}
						placeholder={item.placeholder}
						maxTagCount={item.maxTagCount}
						onSelect={(e, option) => onSelect && onSelect({ name: item.name, option, value: e })}
						onChange={val => item.onChange && item.onChange(val)}
						style={{ width: '100%', margin: '5px 0px', borderRadius: 4 }}
					/>
				)}
			/>
		</Fragment>
	);
}, false)