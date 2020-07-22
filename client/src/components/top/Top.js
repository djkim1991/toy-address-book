import React from 'react';
import AddAddressButton from './add/AddAddressButton';
import SearchBar from './search/SearchBar';
import Title from './title/Title';

function Top() {
    return (
        <div className='top'>
            <Title />
            <AddAddressButton />
            <SearchBar />
        </div>
    );
}

export default Top;