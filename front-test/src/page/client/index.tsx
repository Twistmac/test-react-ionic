import {Button, Card, Col, Row} from 'antd';
import React, {useCallback, useEffect, useState} from 'react';
import CustomTable from '../../component/CustomTable';
import {getAllClient} from "../../service/client";
import {ClientProps} from "../../interface/client.props";


const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Note',
        dataIndex: 'note',
        key: 'note',
    },
];

const ClientPage = () => {

    const [dataSource, setDataSource] = useState<ClientProps[]>([])

    const getAll = useCallback(() => {
        getAllClient().then((data: any) => {
            setDataSource(data.data)
        })
    },[])

    useEffect(() => {
        getAll()
    }, [])

    return(
        <Row>
            <Col span={12} offset={6}>

                <Card>
                    <Col span={12}>
                        <Button type="primary">Ajout client</Button>
                    </Col>
                    <Card
                        style={{ marginTop: 56 }}
                    >
                        <CustomTable data={dataSource} columns={columns} />
                    </Card>
                </Card>


            </Col>
        </Row>
    )
}

export default ClientPage
