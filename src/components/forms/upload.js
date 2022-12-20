import { Button, Space, Upload } from 'antd';
import React from 'react';
import { compareRender } from '../../functions/fn';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';

const uploadButton = (
	<div>
		<PlusOutlined />
		<div style={{ marginTop: 8 }}>Upload</div>
	</div>
);

export const UploadComponent = ({ item, onChange }) => {
	return (
		<Space direction="vertical" style={{ width: '100%' }} size="large">
			<Upload
				beforeUpload={() => false}
				accept={item.accept || '*'}
				onChange={(e) => item.onChange(e, item.name)}
				onRemove={item.onRemove ? (e) => item.onRemove(e, item.name) : () => console.log('onRemove')}
				fileList={item.fileList}
				maxCount={1}
			>
				<Button icon={<UploadOutlined />}>Browse File</Button>
			</Upload>
		</Space>
	)
}

export const UploadImageComponent = ({ item, onChange }) => {
	return (
		<Space direction="vertical" style={{ width: '100%' }} size="large">
			<Upload
				listType="picture-card"
				beforeUpload={() => false}
				fileList={item.fileList}
				accept={item.accept || "image/*"}
				showPreviewIcon={true}
				onChange={(e) => item.onChange(e, item.name)}
				onRemove={item.onRemove ? (e) => item.onRemove(e, item.name) : () => console.log('onRemove')}
				maxCount={1}
				style={{ display: 'flex', justifyContent: 'center' }}
			>
				{item.fileList.length == 1 ? null : uploadButton}
			</Upload>
		</Space>
	)
}

export const MemoizedUploadInput = React.memo(UploadComponent, compareRender)
export const MemoizedUploadImage = React.memo(UploadImageComponent, compareRender)