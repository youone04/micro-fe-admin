import React from 'react';
import { TableMod } from "../../../components";
import { LayoutCards } from '../../../components/cards/LayoutCard';
import { Button } from 'antd';
import { pathRoutes } from '../../../utils/const-routes/const.routes';

export default function PageHomeView(props) {
    return (
        <LayoutCards title='View admin' extra={
            <Button onClick={() => props.navigate(pathRoutes.createAdmin)} type="primary">Create +</Button>
        }>
            <TableMod />
        </LayoutCards>
    );
}