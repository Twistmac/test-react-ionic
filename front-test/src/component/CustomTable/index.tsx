import React from 'react';
import type { FormInstance } from 'antd/lib/form';
import {Table} from "antd";
import {customTableProps} from "./customTable.props";


const CustomTable = ({data, columns}: customTableProps) => {
    return (
        <Table dataSource={data} columns={columns} />
    )
}

export default CustomTable