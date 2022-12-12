import { Avatar, Col, Layout, Row, Steps, Typography } from "antd";
import React, { useState } from "react";
import { CodeOutlined } from '@ant-design/icons';
import './highlights.css';
import { highlights } from "../../../data/highlights";

const { Content } = Layout;
const { Step } = Steps;
const { Title } = Typography;

export const Highlights = () => {

    return (
        <Layout>
            <Content style={{ paddingInline: '20px', background: '#fffae7' }}>
                <Row justify="space-around" align="middle">
                    <Col sm={2} md={2} lg={3}></Col>
                    <Col sm={20} md={20} lg={18}>
                        <Steps
                            current={2}
                            direction="vertical"
                            progressDot={true}
                            responsive={true}
                        >
                            {highlights.map(highlight =>
                                <Step
                                    key={highlight.company}
                                    stepNumber={1}
                                    title={highlight.role}
                                    subTitle={highlight.endDate ? `(${highlight.startDate} - ${highlight.endDate})` : `(${highlight.startDate} - Actualidad)`}
                                    status='process'
                                    description={<>
                                        <Row>
                                            <Avatar style={{ background: 'transparent' }} icon={<CodeOutlined style={{ background: '#7868EC' }} />} />
                                            &nbsp;&nbsp;&nbsp;
                                            {highlight.tags.map((tag, index, array) =>
                                                <Col key={tag} style={{ alignSelf: 'center' }}>
                                                    <span style={{ fontWeight: '600' }}>{index == 0 ? 'Tecnologías: ' : ''}</span>
                                                    {tag}{index + 1 == array.length ? `` : `,`}&nbsp;
                                                </Col>
                                            )}
                                        </Row>
                                        <br />
                                        <span style={{ fontWeight: '600' }}>Tareas:</span> {highlight.tasks}
                                        <br /> <br />
                                        <span style={{ fontWeight: '600' }}>Herramientas:</span> {highlight.tools}
                                    </>}
                                />)}
                        </Steps>
                    </Col>
                    <Col sm={2} md={2} lg={3}></Col>

                </Row>

            </Content>
        </Layout>
    );
}

export default Highlights;