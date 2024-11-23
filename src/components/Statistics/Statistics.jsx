import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Banner from '../Banner/Banner';
const Statistics = () => {

    const data = [
        {
            "name": "Mac",
            "id": 100,
        },
        {
            "name": "Hp",
            "id": 70,
        },
        {
            "name": "Dell",
            "id": 20,
        },
        {
            "name": "OnePlus",
            "id": 40,
        },
        {
            "name": "Iphone",
            "id": 60,
        },
        {
            "name": "Samsung",
            "id": 80,
        },
        {
            "name": "Pixel",
            "id": 100,
        }
    ]

    return (
        <div>
            <Banner></Banner>
            <div className=' mt-12 lg:ml-36'>
                <BarChart width={400} height={320} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="id" fill="#82ca9d" />
                    <Tooltip />
                    <Legend />
                </BarChart>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Statistics;