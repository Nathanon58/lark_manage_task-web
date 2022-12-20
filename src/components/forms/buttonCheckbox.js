import React from 'react';
import { compareRender } from '../../functions/fn';
import { Controller } from "react-hook-form";
import { Checkbox, Button } from 'antd';
import { useState } from "preact/hooks";

export const ButtonCheckboxTheme = React.memo(({ item, handleChange, control }) => {

    const [styleButton, setStyleButton] = useState('button-checkbox')
    const [styleText, setStyleText] = useState('')

    const handle = (value) => {
        setStyleButton(value ? 'checkbox-button-checked' : 'button-checkbox');
        setStyleText(value ? '#FFFFFF' : '#000000')
        return value
    }

    return (
        <>
            <Controller
                name={item.name}
                control={control}
                rules={item.rules}
                defaultValue={item.defaultValue}
                render={({ value, onChange }) => (
                    <Button
                        className={styleButton}
                        disabled={item.disabled}
                        style={item.style}
                    >
                        <Checkbox
                            checked={handle(value)}
                            disabled={item.disabled}
                            style={{
                                color: styleText,
                                paddingLeft: '10px',
                                paddingRight: '15px',
                                paddingTop: '4px',
                                paddingBottom: '4px'
                            }}
                            onChange={(e) => handleChange ?
                                handleChange({ name: item.name, value: e.target.checked }) :
                                onChange(e.target.checked)}>
                            {item.labelbox}
                        </Checkbox>
                    </Button>
                )}
            />
        </>
    )
}, compareRender)