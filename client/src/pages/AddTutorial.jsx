import React, { Component } from "react";
import EditResults from "./EditResults"
import api from "../api";

import styled from "styled-components";

const Title = styled.h3.attrs({
  className: "h3"
})``;

const Wrapper = styled.div.attrs({
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

class AddTutorial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
      tutorial: {
        title: "",
        channel: "",
        description: "",
        date: "",
        embedUrl: "",
        watchUrl: ""
      },
    };
  }

  handleChangeCode = e => {
    const code = e.target.value;
    this.setState({ code });
  };

  handleChangeTitle = e => {
    const title = e.target.value;
    this.setState(
      { 
        tutorial:{ title }
      }
    );
  }

  handleCreateTutorial = async e => {
    e.preventDefault();
    const payload = this.state.tutorial;
   
    await api.addTutorial(payload).then(res => {
      this.handleResetState();
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
  };

  handleResetState = () => {
    this.setState({
      tutorial:
      {
        title: '',
        channel: '',
        description: '',
        date: '',
        embedUrl: '',
        watchUrl: '',
      }
    })
  }

  scrapeTutorial = async () => {
    const { code } = this.state;
    const payload = { code };
    await api.scrapeYoutube(payload).then(res => {
      window.alert(`Video with ID a${code} scraped successfully`);
      this.setState({
        tutorial: 
          {
            title: res.data.scrapeResults.title,
            channel: res.data.scrapeResults.channel,
            description: res.data.scrapeResults.description,
            date: res.data.scrapeResults.date,
            embedUrl: res.data.scrapeResults.embedUrl,
            watchUrl: res.data.scrapeResults.watchUrl,
          }
      })
    });

  };

  render() {
    const { code } = this.state;
    
    const enterID = (
      <Wrapper>
        <Title>Enter Youtube Video ID</Title>
        <Label>ID: </Label>
        <InputText
          type="text"
          defaultValue={code} 
          onChange={this.handleChangeCode}
        />
 
        <Button onClick={this.scrapeTutorial}>Load Tutorial</Button>
        <CancelButton href={"/tutorials/list"}>Cancel</CancelButton>
      </Wrapper>
    )

    const editResults = (
      <EditResults 
        tutorial={this.state.tutorial} 
        onChangeTitle={this.handleChangeTitle}
        onChangeDescription={this.handleChangeDescription}
        onCreateTutorial={this.handleCreateTutorial}
        onResetState={this.handleResetState}
      />
    )
    
    const content = !this.state.tutorial.title ? enterID : editResults;
    
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default AddTutorial;
