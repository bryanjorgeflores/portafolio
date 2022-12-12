import { Button } from 'antd';
import React from 'react';
import PropTypes from "prop-types";

export const CustomButton = ({ text, size, onClick }) => {
    return <Button
        size={size}
        style={{ backgroundColor: '#7868ec', color: 'white' }}
        onClick={onClick}
    >
        {text}
    </Button>;

};

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

CustomButton.defaultProps = {
    text: 'This is a button',
    size: 'small',
};