import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import theme from "./../../themes/themes"

const styles = {
    fontSize(props) {
        if (props.size === 'small') {
          return theme.fontSize.xs;
        }
        if (props.size === 'medium') {
          return theme.fontSize.s;
        }
        if (props.size === 'large') {
          return theme.fontSize.m;
        }
        return '';
      },

}

const StyledInput = styled(
    ({
        size,
        ...props
      }) => <input {...props} />,
    )`
    padding:0.5rem;
    font-size: ${styles.fontSize};
    width: 20rem;
    `;


const Input = (props) => (
    <StyledInput
        {...props}
    />
);

Input.defaultProps = {
    size: 'medium'
};

Input.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    };


export default Input
    
