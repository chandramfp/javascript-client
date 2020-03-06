import React from 'react';

import { TextField, SelectField, RadioGroup } from '../../components';
import { selectOptions, radioOptionsCricket, radioOptionsFootball } from '../../configs/constants';

class InputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'chandrashekhar',
      sport: '',
      cricket: '',
      football: '',

    };
  }

  handlerOnChangeTextField = (e) => {
    // console.log('inside onChange', e.target.value);
    this.setState({ name: e.target.value });
    // console.log(this.state);
  }

  handlerOnChangeSelectField = (e) => {
    // console.log('inside onChange', e.target.value);
    let { cricket, football } = this.state;
    cricket = '';
    football = '';
    this.setState({ sport: e.target.value, cricket, football });
    // console.log(this.state);
  }

  handlerOnChangeRadioOption = (e) => {
    let { cricket, football } = this.state;
    const { sport } = this.state;
    if (sport === 'football') {
      cricket = '';
      this.setState({ football: e.target.value, cricket });
    }
    if (sport === 'cricket') {
      football = '';
      this.setState({ cricket: e.target.value, football });
    }
  }

  getRadioOption = () => {
    const { sport } = this.state;

    return sport === 'cricket' ? radioOptionsCricket : radioOptionsFootball;
  }

  render() {
    console.log(this.state);
    const { sport, name } = this.state;
    return (
      <>
        <p><b>Name</b></p>
        <TextField onChange={this.handlerOnChangeTextField} erroe={this.error} value={name} />

        <p><b>Select the game you play?</b></p>
        <SelectField
          options={selectOptions}
          defaultText="Select"
          onChange={this.handlerOnChangeSelectField}
          Value={sport}
        />

        {
          sport && (sport === 'cricket' || sport === 'football') && (
            <>
              <p><b>What you do?</b></p>
              <RadioGroup
                options={this.getRadioOption()}
                onChange={this.handlerOnChangeRadioOption}
                Value=""
                error=""
              />
            </>
          )
        }
      </>
    );
  }
}

export default InputDemo;
