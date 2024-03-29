
import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8 buy"
      onClick={action ? () => action() : null}
      border="true"

    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`

  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
  width: 100%;
  padding: 15px;
  outline: none;
  
`;






FullButton.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  border: PropTypes.bool
};