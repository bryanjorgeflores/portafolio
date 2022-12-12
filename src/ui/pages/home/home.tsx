import React, { useState } from 'react';
import './home.css';
import { Layout, Col, Row, Card, Image, Typography, Avatar, Tooltip, Button } from 'antd';
import { PhoneOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons';

import { CustomButton } from '../components/button';
import { ProjectCard } from './components/card';
import { CustomNavbar } from './components/menu';
import { projectsReleased } from '../../../data/projects';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;


export const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [projects, setProjects] = useState(projectsReleased);

  return (
    <Layout>
      <Content style={{ paddingInline: '20px', background: '#fffae7' }}>
        <Row justify="space-around" align="middle">
          <Col sm={2} md={2} lg={3}></Col>
          <Col sm={20} md={20} lg={18}>
            <Row justify={'center'} align={'middle'}>
              <Col xs={24} sm={24} md={24} lg={12} >
                <span>
                  <h1 style={{ fontWeight: 'bold', fontSize: 36 }} >
                    Resolviendo <span className='text-tag'>problemas modernos </span>
                    a través del desarrollo web/móvil
                  </h1>
                  <h3>
                    4 años desarrollando aplicaciones web con Angular/React
                    y aplicaciones móviles con Flutter/Ionic
                  </h3>
                </span>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12}>
                <Card cover={
                  <Image src='assets/img/cover.png'
                    preview={false}
                    style={{ backgroundSize: 'contain', objectFit: 'contain', height: 300, background: 'transparent', zIndex: 2 }}
                  />
                }
                  style={{ background: 'transparent' }}
                />
              </Col>
            </Row>
            <Row gutter={[18, 18]}>
              <Col xs={24} sm={12} lg={12}>
                <CustomButton
                  size='large'
                  text='Contáctame'
                  onClick={() => window.location.href = 'mailto:bryanjorgeflores@gmail.com'} />
              </Col>
              <Col xs={24} sm={12} lg={{ span: 12, pull: 3 }}>
                <Avatar.Group>
                  <Tooltip title={`LinkedIn`}>
                    <Button type="link" href='https://www.linkedin.com/in/bryan-quincy-jorge-flores-5a5558125/'
                      icon={<Avatar style={{ backgroundColor: '#0A66C2' }}
                        icon={<LinkedinOutlined />} />} />
                  </Tooltip>
                  <Tooltip title={`WhatsApp`}>
                    <Button type="link" href='https://api.whatsapp.com/send?phone=51917470799'
                      icon={<Avatar style={{ backgroundColor: '#075e54' }}
                        icon={<WhatsAppOutlined />} />} />
                  </Tooltip>
                  <Tooltip title={`Celular`}>
                    <Button type="link" href='tel:+51917470799'
                      icon={<Avatar style={{ backgroundColor: '#7868ec' }}
                        icon={<PhoneOutlined />} />} />
                  </Tooltip>
                </Avatar.Group>
              </Col>
            </Row>
            <br />
            <br />
            <Row justify={'center'} align={'middle'} >
              <Col xs={24} sm={24} lg={10} style={{ textAlign: 'center', alignItems: 'center', verticalAlign: 'center' }}>
                <p className='recent-work'>
                  <span>
                    Mi <span className='text-tag'>reciente trabajo</span>
                  </span>
                </p>
              </Col>
              <Col xs={12} sm={12} lg={7} style={{ textAlign: 'center' }}>
                <span style={{ fontWeight: 'bold' }}>
                  20+
                </span>
                <br />
                Proyectos completados
              </Col>
              <Col xs={12} sm={12} lg={7} style={{ textAlign: 'center' }} >
                <span style={{ fontWeight: 'bold' }}>
                  96.7%
                </span>

                <br />
                Clientes Satisfechos
              </Col>
            </Row>
            <br />
            <br />
            <Row justify="center" align={'middle'} gutter={[18, 18]}  >
              {projects.map((project) =>
                <Col key={project.code} span={24} xs={24} sm={24} md={18} lg={12}>
                  <ProjectCard
                    project={project}
                  />
                </Col>
              )}
            </Row></Col>
          <Col sm={2} md={2} lg={3}></Col>
        </Row>
      </Content >
    </Layout >
  )
}

export default Home;
