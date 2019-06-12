import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div className='Header'>
                <a href='https://www.labelinsight.com' target='_blank' rel='noopener noreferrer'>
                <img alt='Label Inisght Logo' src='https://www.labelinsight.com/hubfs/labelinsight_horizontal_black_large_register.svg' />
                </a>
            </div>
        )
    }
}

export default Header;