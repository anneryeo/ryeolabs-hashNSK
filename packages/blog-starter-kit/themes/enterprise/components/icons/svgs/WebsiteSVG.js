import React from 'react';

export default class WebsiteSVG extends React.Component {
    render() {
        return (
            <svg className={this.props.className} viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" />
                <path d="M2 12h20M12 2v20M4.5 5.5c3 4 3 11 0 16M19.5 5.5c-3 4-3 11 0 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }
}
