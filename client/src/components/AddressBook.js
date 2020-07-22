import React from 'react';
import Top from './top/Top';
import Addresses from './addresses/Addresses';

function AddressBook() {
    return(
        <div className='address-book'>
            <Top />
            <Addresses />
        </div>
    );
};

export default AddressBook;
