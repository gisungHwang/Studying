import React, { useCallback, useState } from 'react';

const SearchBar = (items, loading, query, queryIn) => {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState();
    const [queryIn, setQueryIn] = useState();

    const onChange = useCallback(
        (e) => {
            setQuery(e.target.value);
        },
        []
    );

    const onSubmit = useCallback(
        (e) => {
            setQueryIn(query);
            e.preventDefault();
        },
        [query]
    );
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={query}
                    onChange={onChange}
                />
                <button type='submit'>검색</button>
            </form>
        </div>
    );
};

export default SearchBar;