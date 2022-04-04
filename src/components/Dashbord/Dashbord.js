import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis, Tooltip, PieChart, Pie, LineChart, Line } from "recharts";
import Chart from "../Chart/Chart";
const Dashbord = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    console.log(data)
    return (
        <div>
            <Container>
                <Row xs={1} md={1} lg={2} className="g-4">
                    <Col>
                        <h1 className="text-start mb-2">BarChart</h1>
                        <BarChart width={620} height={250} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <XAxis dataKey={"month"}></XAxis>
                            <YAxis />
                            <Legend />
                            <Bar dataKey="investment" fill="#82ca9d" />
                            <Bar dataKey="sell" fill="green" />
                            <Bar dataKey="revenue" fill="#8884d8" />
                        </BarChart>
                    </Col>
                    <Col>
                        <h1 className="text-start mb-2">LineChart</h1>
                        <LineChart width={620} height={250} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="investment" stroke="green" />
                            <Line type="monotone" dataKey="sell" stroke="#8884d5" />
                            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                        </LineChart>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
export default Dashbord;

