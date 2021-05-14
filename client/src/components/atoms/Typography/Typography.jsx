import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import theme from '../../themes/themes'

const styles = {
    fontSize(props){
        return theme.fontSize[props.fontSize];
    },
    fontWeight(props){
        return theme.fontWeight[props.fontWeight]
    },
}

const StyledTypography = styled(
({
    fontSize,
    fontWeight,
    children,
    ...props
  }) => <div {...props}>{children}</div>,
)`
font-size: ${styles.fontSize};
font-weight: ${styles.fontWeight};`


const Typography = (props) => (
    <StyledTypography
        {...props}
    />
);

Typography.propTypes = {
    fontSize: PropTypes.oneOf(['xxxs', 'xxs', 'xs', 's', 'm', 'ml', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl']),
    disabled: PropTypes.bool,
    fontWeight: PropTypes.oneOf(['normal', 'medium', 'semibold', 'bold'])
  };

Typography.defaultProps = {
    fontSize: 'm',
    fontWeight: 'normal'
};

export default Typography;