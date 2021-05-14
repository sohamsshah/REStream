import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import theme from "./../../themes/themes"

const styles = {
    height(props){
        if(props.kind === 'card'){
            return "18rem"
        }
        if(props.kind === 'video'){
            return "12rem"
        }
        if(props.kind === 'small-card'){
            return "12rem"
        }
        if(props.kind === 'small-video'){
            return "8rem"
        }
    },
    width(props){
        if(props.kind === 'small-card'){
            return "8rem"
        }
        if(props.kind === 'small-video'){
            return "15rem"
        }
        return "100%"
    }
}

const StyledImage = styled(
    ({
      kind,
      src,
      alt,
      ...props
    }) => <img src={src} alt={alt} {...props} />,
  )`
  height: ${styles.height};
  width:${styles.width};
  transition:0.2s;
  &:hover{
    box-shadow: -5px 5px ${theme.color.primaryColor};
    transform: translate(5%, -2%);
  }`

const Image = (props) => (
    <StyledImage
        {...props}
    />
);

Image.defaultProps = {
    kind:'card'
};

Image.propTypes = {
    kind: PropTypes.oneOf(['card', 'video']),
};


export default Image
