import { Segmented } from 'antd';

export default function SegmentedComponent({ options, value, onChange }) {
    return (
        <Segmented
            options={options}
            orientation="vertical"
            value={value}
            onChange={onChange}
        />
    )
}
