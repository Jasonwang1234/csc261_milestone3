import { Table } from 'antd'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';


function Database() {

    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    // }


    const GE_data = [
        {
            key: '1',
            patient_id: '1',
            patient_name: "John Example",
            phone_number: '202-555-0137',
            age: "32"
        },
        {
            key: '2',
            patient_id: '2',
            patient_name: "Jason Example",
            phone_number: '202-555-0148',
            age: "42"
        },
    ];
    const GE_column = [
        {
            title: 'Patient ID',
            dataIndex: 'patient_id',
            key: 'patient_id',
        },
        {
            title: 'Patient Name',
            dataIndex: 'patient_name',
            key: 'patient_name',
        },
        {
            title: 'Contact',
            dataIndex: 'phone_number',
            key: 'phone_number',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
    ];

    const A_data = [

    ];
    const A_column = [
        {
            title: 'Appointment ID',
            dataIndex: 'appointment_id',
            key: 'appointment_id',
        },
        {
            title: 'Doctor Name',
            dataIndex: 'doctor_name',
            key: 'doctor_name',
        },
        {
            title: 'Doctor ID',
            dataIndex: 'phone_number',
            key: 'phone_number',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
    ];

    return (
        <div className="App">

            <header className="App-header">
            </header>
            <Tabs>
                <TabList>
                    <Tab>Patient Information</Tab>
                    <Tab>Appointment</Tab>
                    <Tab>Room</Tab>
                    <Tab>Transaction</Tab>

                </TabList>
                <TabPanel>
                    <Table dataSource={GE_data} columns={GE_column} />

                </TabPanel>
                <TabPanel>
                    <div><p>Testing Peach</p></div>
                </TabPanel>
            </Tabs>

        </div>
    );



}

export default Database;
