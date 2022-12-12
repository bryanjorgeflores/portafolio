import { Card, Image, Avatar, Typography } from 'antd';
import React from 'react';
import PropTypes from "prop-types";

import './card.css';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const { Title } = Typography;


export const ProjectCard = ({ project, background }) => {
    return <Link to='projects' state={project}>
        <Card
            className='card'
            style={{ background: background }}
            cover={
                <Image
                    src={`assets/img/${project.code}_0.jpg`}
                    style={{ backgroundSize: 'contain', objectFit: 'contain', height: 300, background: 'transparent', paddingTop: 20 }}
                    preview={false}
                />}
        >
            <Meta
                title={
                    <Title level={5}>{project.name}</Title>
                }
                description={project.description}
            />
        </Card>
    </Link>;

};

ProjectCard.propTypes = {
    background: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
    background: 'transparent',
};