import React from 'react'
import styled from 'styled-components';
import theme from "./../../themes/themes"

const StyledTag = styled(
    ({
        text,
        ...props
      }) => <div {...props}>{text} </div>,
    )`
    padding:0.2rem 0.5rem;
    margin:0.2rem;
    font-weight: ${theme.fontWeight.medium};
    border-radius: ${theme.borderRadiusPill};
    font-size: ${theme.fontSize.s};
    background-color: ${theme.color.backgroundColorMediumDark}
    `;

const Tag = (props) => (
    <StyledTag
        {...props}
    />
);

export default Tag
