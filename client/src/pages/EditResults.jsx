import React from "react";
import styled from "styled-components";
import Iframe from "react-iframe";

//Styled Components==========================================
const Wrapper = styled.div.attrs({
  className: "form-group container"
})`
  margin: 0 30px;
`;

const Form = styled.div.attrs({
  className: "form-group container"
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control"
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`
})`
  margin: 15px 15px 15px 5px;
`;

//Component===================================================
//============================================================

const EditTutorial = props => {
  const { title, description, embedUrl } = props.tutorial;

  return (
    <Wrapper>
      <Iframe
        url={embedUrl}
        width="700px"
        height="395px"
        className="video"
        display="initial"
        position="relative"
      />
      <Form>
        <Label>Title: </Label>
        <InputText
          type="text"
          defaultValue={title}
          onChange={props.handleChangeTitle}
        />
        <Label>Description: </Label>
        <InputText
          type="text"
          defaultValue={description}
          onChange={props.handleChangeDefinition}
        />
        <Button onClick={props.onCreateTutorial}>Create Tutorial</Button>
        <CancelButton onClick={props.onResetState}>Cancel</CancelButton>
      </Form>
    </Wrapper>
  );
};

export default EditTutorial