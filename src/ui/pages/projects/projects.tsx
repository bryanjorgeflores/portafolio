import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import { Layout, Image, Row, Col, Typography } from 'antd';

const { Title } = Typography;

const { Header, Content } = Layout;

export const Projects = () => {
    const location = useLocation();
    const [project, setProject] = useState(location.state);

    return (
        <Layout >
            <Content style={{ padding: '20px', background: '#fffae7' }}>
                <Row>
                    <Col sm={2} md={2} lg={3}></Col>
                    <Col>
                        <Row>
                            <Image
                                style={{ backgroundSize: 'contain', objectFit: 'contain', height: 90, background: 'transparent', borderRadius: 10 }}
                                src={`assets/img/${project.code}_icon.jpg`}
                                preview={false}
                            />
                            &nbsp;&nbsp;&nbsp;
                            <Title>
                                {project.company}
                            </Title>
                        </Row>
                    </Col>
                    <Col sm={2} md={2} lg={3}></Col>
                </Row>
                <br />
                <Row justify="center" align="middle">
                    <Col sm={2} md={2} lg={3}></Col>
                    <Col sm={20} md={20} lg={18}>
                        <Row gutter={[18, 18]} justify="center" align="middle">
                            <Image.PreviewGroup>
                                {[0, 1, 2, 3].map(i => <Col key={`imageproject${i}`} sm={12} md={12} lg={6}>
                                    <Image

                                        style={{ backgroundSize: 'contain', objectFit: 'contain', height: 300, background: 'transparent' }}
                                        src={`assets/img/${project.code}_${i}.jpg`}
                                    />
                                </Col>)}
                            </Image.PreviewGroup>

                        </Row>
                    </Col>
                    <Col sm={2} md={2} lg={3}></Col>
                </Row>
                <Row>
                    <Col sm={2} md={2} lg={3}></Col>
                    <Col>
                        <Title level={2}>
                            Tecnologías aplicadas: {project.stack}
                        </Title>
                        <Title level={3}>
                            Proyecto: {project.name}
                        </Title>
                        <Title level={5}>
                            Descripción: {project.description}
                        </Title>
                    </Col>
                    <Col sm={2} md={2} lg={3}></Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default Projects;
