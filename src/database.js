import {Button, Col, Drawer, Form, Input, Row, Select, Space, Table} from 'antd'
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {
    DrawerForm,
    ProForm,
    ProFormDateRangePicker,
    ProFormSelect,
    ProFormText,
} from '@ant-design/pro-components';
import {useState} from "react";




function Database() {

    // function getRandomInt(max) {
    //     return Math.floor(Math.random() * max);
    // }

    // const {  DownloadOutlined  } = icons;

    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

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
        {
            key: "1",
            appointment_id: "1",
            doctor_name: "Doctor example 0001",
            phone_number: "202-555-0111",
            start_time: "12/12/2012 13:23",
            end_time: "12/12/2012/ 13:33",
            room_num: "102",
            patient_id: "1"
        },
        {
            key: "2",
            appointment_id: "2",
            doctor_name: "Doctor example 0023",
            phone_number: "202-555-0123",
            start_time: "12/13/2012 13:30",
            end_time: "12/13/2012/ 14:00",
            room_num: "102",
            patient_id: "2"
        },
        {
            key: "3",
            appointment_id: "3",
            doctor_name: "Doctor example 0005",
            phone_number: "202-555-0191",
            start_time: "12/10/2012 11:30",
            end_time: "12/10/2012/ 12:33",
            room_num: "202",
            patient_id: "2"
        },


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
            title: 'Start Time',
            dataIndex: 'start_time',
            key: 'start_time',
        },
        {
            title: 'End Time',
            dataIndex: 'end_time',
            key: 'end_time',
        },
        {
            title: 'Room Number',
            dataIndex: 'room_num',
            key: 'room_num',
        },
        {
            title: 'Patient',
            dataIndex: 'patient_id',
            key: 'patient_id',
        },
    ];

    const room_data = [
        {
            key: "1",
            building_name: "Aether",
            room_id: "102",
            room_type: "Medical-Surgical Patient Room",
            under_construct: "No",
            person_in_charge: "Doctor Example 2",
        },
        {
            key: "2",
            building_name: "Aether",
            room_id: "202",
            room_type: "Medical-Surgical Patient Room",
            under_construct: "No",
            person_in_charge: "Doctor Example 1",
        },
        {
            key: "3",
            building_name: "Discord",
            room_id: "302",
            room_type: "Behavioral and Mental Health Room",
            under_construct: "Yes",
            person_in_charge: "Doctor Example 3",
        },
    ];
    const room_column = [
        {
            title: 'Building Name',
            dataIndex: 'building_name',
            key: 'building_name',
        },
        {
            title: 'Room ID',
            dataIndex: 'room_id',
            key: 'room_id',
        },
        {
            title: 'Room Type',
            dataIndex: 'room_type',
            key: 'room_type',
        },
        {
            title: 'Under Construction',
            dataIndex: 'under_construct',
            key: 'under_construct',
        },
        {
            title: 'Person in Charge',
            dataIndex: 'person_in_charge',
            key: 'person_in_charge',
        },
    ];

    const trans_data = [
        {
            key: "1",
            patient_id: "1",
            transaction_id: "0001",
            transaction_completion: "Yes",
            transaction_amount: "600.00",
            insurance: "Insurance Company A",
            transaction_completion_time: "12/12/2012/ 13:40"
        },
        {
            key: "1",
            patient_id: "2",
            transaction_id: "0002",
            transaction_completion: "Yes",
            transaction_amount: "100.00",
            insurance: "Insurance Company B",
            transaction_completion_time: "12/13/2012/ 16:20"
        }
    ];
    const trans_column = [
        {
            title: 'Patient ID',
            dataIndex: 'patient_id',
            key: 'patient_id',
        },
        {
            title: 'Transaction ID',
            dataIndex: 'transaction_id',
            key: 'transaction_id',
        },
        {
            title: 'Transaction Completion',
            dataIndex: 'transaction_completion',
            key: 'transaction_completion',
        },
        {
            title: 'Transaction Amount',
            dataIndex: 'transaction_amount',
            key: 'transaction_amount',
        },
        {
            title: 'Insurance',
            dataIndex: 'insurance',
            key: 'insurance',
        },
        {
            title: 'Transaction Completion Time',
            dataIndex: 'transaction_completion_time',
            key: 'transaction_completion_time',
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
                    <div>
                        <Table dataSource={GE_data} columns={GE_column} bordered />
                        <Space wrap>
                            <Button type="primary" size={"large"}>Update/Refresh</Button>
                            <Button type="primary" onClick={showDrawer} size={"large"}>Add Row</Button>
                            <Drawer
                                title="Adding New Row"
                                width={520}
                                onClose={onClose}
                                open={open}
                                bodyStyle={{ paddingBottom: 80 }}
                                extra={
                                    <Space>
                                        <Button onClick={onClose}>Cancel</Button>
                                        <Button onClick={onClose} type="primary">
                                            Submit
                                        </Button>
                                    </Space>
                                }
                            >
                                <Form layout="vertical" hideRequiredMark>
                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Form.Item
                                                name="Patient ID"
                                                label="Name"
                                                rules={[{ required: true, message: 'Please enter user name' }]}
                                            >
                                                <Input placeholder="Please enter user name" />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row gutter={16}>
                                        <Col span={12}>
                                            <Form.Item
                                                name="approver"
                                                label="Approver"
                                                rules={[{ required: true, message: 'Please choose the approver' }]}
                                            >
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                </Form>
                            </Drawer>
                                <Button type="primary" size={"large"}>Delete Row</Button>
                        </Space>
                    </div>

                </TabPanel>
                <TabPanel>
                    <div>
                        <Table dataSource={A_data} columns={A_column} bordered />
                        <Space wrap>
                            <Button type="primary" size={"large"}>Update/Refresh</Button>
                            <Button type="primary" size={"large"}>Add Row</Button>
                            <Button type="primary" size={"large"}>Delete Row</Button>
                        </Space>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <Table dataSource={room_data} columns={room_column} bordered />
                        <Space wrap>
                            <Button type="primary" size={"large"}>Update/Refresh</Button>
                            <Button type="primary" size={"large"}>Add Row</Button>
                            <Button type="primary" size={"large"}>Delete Row</Button>
                        </Space>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div>
                        <Table dataSource={trans_data} columns={trans_column} bordered />
                        <Space wrap>
                            <Button type="primary" size={"large"}>Update/Refresh</Button>
                            <Button type="primary" size={"large"}>Add Row</Button>
                            <Button type="primary" size={"large"}>Delete Row</Button>
                        </Space>
                    </div>
                    </TabPanel>
            </Tabs>

        </div>
    );



}

export default Database;
