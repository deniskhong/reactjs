import React, { Component } from 'react';

import Select from 'react-select';
import { colourOptions } from './data';
import AsyncSelect from 'react-select/lib/Async';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];


const filterColors = (inputValue) => {
    return colourOptions.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
        callback(filterColors(inputValue));
    }, 1000);
};


const customFilterOption = (option, rawInput) => {
    console.log("option", option);
    console.log("rawInput", rawInput);
    return option.label.toLowerCase().startsWith(rawInput.toLowerCase());

};

export default class SelectInputAsync extends Component {

    state = { inputValue: '' };

    handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
    }

    render() {
        //  const { input, name, id, ...custom } = this.props;
        console.log({ ...this.props })
        return (
            <React.Fragment>
                {/*   <Select
                    filterOption={customFilterOption}
                    value={this.props.input.value}
                    onChange={(value) => this.props.input.onChange(value)}
                    onBlur={() => this.props.input.onBlur(this.props.input.value)}
                    options={options}
                    placeholder={this.props.placeholder}
                />*/}npm install react-autosuggest --save
                <AsyncSelect
                    {...this.props}
                    filterOption={customFilterOption}
                    filterPos="start"
                    filterProp="value"
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    onInputChange={this.handleInputChange}
                    onChange={(value) => this.props.input.onChange(value)}
                />
            </React.Fragment>
        );
    }
}