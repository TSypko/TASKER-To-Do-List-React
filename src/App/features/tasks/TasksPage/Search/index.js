import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FormInput from '../FormInput';
import searchQueryParamName from "../../searchQueryParamName";

const Search = () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "")
            searchParams.delete(searchQueryParamName);
        else {
            searchParams.set(searchQueryParamName, target.value)
        }
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <div>
            <FormInput
                placeholder="search for task here"
                value={query || ""}
                onChange={onInputChange}
            />
        </div>
    );
};

export default Search;
