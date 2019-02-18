import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const languages = [
    {
        name: 'C',
        year: '1972'
    },
    {
        name: 'C#',
        year: '2000'
    },
    {
        name: 'C++',
        year: '1983'
    },
    {
        name: 'Clojure',
        year: '2007'
    }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name}</span>
    );
}

export default class Example extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
    /*
      onChange={(value) => this.props.input.onChange(value)}
                    onBlur={() => this.props.input.onBlur(this.props.input.value)}
                    value={this.props.input.value}*/

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Type 'c'",
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={(suggestion) => {
                    this.props.input.onChange(suggestion);
                    return suggestion.name;
                }}
                renderSuggestion={(suggestion) => {
                    return suggestion.name;
                }}
                inputProps={inputProps}
            />
        );
    }
}
//  this.props.input.onChange(suggestion.name);