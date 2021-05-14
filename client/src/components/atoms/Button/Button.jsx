import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import theme from '../../themes/themes'

const styles = {
    color(props){
        if(props.kind === 'filled'){
            return theme.color.lightColor;
        }
        if(props.kind === 'outlined'){
            return theme.color.secondaryColor;
        }
    },

    backgroundColor(props){
        if(props.kind === 'filled'){
            return theme.color.secondaryColor;
        }
        if(props.kind === 'outlined'){
            return theme.color.lightColor;
        }
    },

    borderColor(props) {
        if (props.kind === 'filled') {
          return theme.color.secondaryColor;
        }
        if (props.kind === 'outlined') {
          return theme.color.secondaryColor;
        }
        return '';
    },

    fontSize(props) {
        if (props.size === 'small') {
          return theme.fontSize.xs;
        }
        if (props.size === 'medium') {
          return theme.fontSize.s;
        }
        if (props.size === 'large') {
          return theme.fontSize.s;
        }
        return '';
      },
      hover: {
        color(props) {
          if (props.kind === 'filled') {
            return theme.color.lightColor;
          }
          if (props.kind === 'outlined') {
            return theme.color.lightColor;
          }
          return '';
        },
        backgroundColor(props) {
          if (props.kind === 'filled') {
            return theme.color.secondaryColorDark;
          }
          if (props.kind === 'outlined') {
            return theme.color.secondaryColor;
          }
          return '';
        },
      },
}

const StyledButton = styled(
    ({
      color,
      kind,
      size,
      shape,
      block,
      isLoading,
      ...props
    }) => <button {...props} />,
  )`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:0.2s;
    color: ${styles.color};
    font-size: ${styles.fontSize};
    background-color: ${styles.backgroundColor};
    padding:0.5rem 0.75rem;
    width: ${(props) => props.block ? '100%' : ''};
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    border-color: ${styles.borderColor};
    cursor: pointer;
    &:hover {
      color: ${styles.hover.color};
      background-color: ${styles.hover.backgroundColor};
    }
  `;

const Button = (props) => (
    <StyledButton disabled={props.disabled}
        {...props}
    />
);

Button.defaultProps = {
    kind: 'filled',
    size: 'medium'
};

Button.propTypes = {
    kind: PropTypes.oneOf(['filled', 'outlined']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,

  };


export default Button
