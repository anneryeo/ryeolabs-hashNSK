import React from 'react';

export default class FacebookSVG extends React.Component {
    render() {
        return (
            <svg className={this.props.className} viewBox="0 0 24 24" fill="none">
                <path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v7h4v-7h3l1-4h-4V6a1 1 0 011-1h2V2z" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
}
