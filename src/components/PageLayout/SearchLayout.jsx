import React from "react";
import { ButtonTheme } from "../buttons";
import { TextLarge } from "../forms/text";
import { useForm } from "react-hook-form";
import { CardTheme } from "../card/CardTheme";
import { useEffect, useState } from "preact/hooks";
import RenderForm from "../../constants/global/RenderForm";
import { ContainerButton } from "../../style/styledComponentGlobal";

export const SearchLayout = ({ props }) => {
	const { title, formSearch, onSearch, icon, onClearCustom, spanSearch } = props;
	const [dataSearch, setDataSearch] = useState(formSearch)

	const { handleSubmit, errors, setValue, getValues, control } = useForm();

	const onSubmit = data => {
		onSearch(data)
	}

	useEffect(() => {
		setDataSearch(formSearch)
	}, [dataSearch])

	const onClear = (formSearchTab) => {
		let form = formSearchTab ? formSearchTab : formSearch
		form.forEach(val => setValue(val.name, ""))
	}

	return (
		<>
			<CardTheme
				title={
					title &&
					<div style={{ display: 'flex', alignItems: 'center' }}>
						{icon}
						&nbsp;
						<TextLarge text={title} />
					</div>
				}
				content={
					<form onSubmit={handleSubmit(onSubmit)}>
						<RenderForm
							control={control}
							setValue={setValue}
							getValues={getValues}
							errors={errors}
							formList={formSearch}
							spanSearch={spanSearch}
							renderButton={
								<ContainerButton right>
									<ButtonTheme useFor="SEARCH" htmlType="submit" />
									<ButtonTheme useFor="CLEAR" onClick={onClearCustom ? () => onClearCustom(setValue, formSearch) : () => onClear()} />
								</ContainerButton>
							}
						/>
					</form>
				}
			/>
		</>
	)
}