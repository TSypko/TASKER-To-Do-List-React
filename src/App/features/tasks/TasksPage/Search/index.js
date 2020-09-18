import React from 'react';
import FormInput from '../FormInput';
import searchQueryParamName from "../../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from '../../queryParameters';

const Search = () => {

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : "",
        });
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
