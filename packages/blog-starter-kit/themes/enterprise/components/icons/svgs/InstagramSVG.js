import React from 'react';

export default class InstagramSVG extends React.Component {
    render() {
        return (
            <svg className={this.props.className} viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
            </svg>
        );
    }
}
