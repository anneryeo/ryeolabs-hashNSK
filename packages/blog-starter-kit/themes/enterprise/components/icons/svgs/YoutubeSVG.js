import React from 'react';

export default class YoutubeSVG extends React.Component {
    render() {
        return (
            <svg className={this.props.className} viewBox="0 0 24 24" fill="none">
                <rect x="2" y="6" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
            </svg>
        );
    }
}
