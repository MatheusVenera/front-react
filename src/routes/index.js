import React from 'react';
import { Routes as RoutesLib, Route } from 'react-router-dom'
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
    return (
            <RoutesLib>
                <Route path='/' element={<Login/>} />
                <Route path='*' element={<Page404/>} />
            </RoutesLib>
    );
};