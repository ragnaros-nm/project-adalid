import React, { Fragment } from "react";
import styled from '@emotion/styled'

const ErrorContainer= styled.div`
  margin-bottom: 10px;
`;


const Error = ({ mensaje }) => {
  return (
    <Fragment>
      <ErrorContainer className="alert alert-danger" role="alert">
        <h4 className="alert-heading">¡Se ha producido un error!</h4>
        {mensaje}
      </ErrorContainer>
    </Fragment>
  );
};

export default Error;
