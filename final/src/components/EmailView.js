import {EMAIL_PROP_TYPE} from './constants';
import React from 'react';

import './EmailView.scss';

export default class EmailView extends React.Component {
    static propTypes = {
        email: EMAIL_PROP_TYPE.isRequired,
        onClose: React.PropTypes.func.isRequired,
        onDelete: React.PropTypes.func.isRequired
    }

    _handleCloseClick(e) {
        e.stopPropagation();
        this.props.onClose();
    }

    _handleDeleteClick(e) {
        e.stopPropagation();
        this.props.onDelete();
    }

    render() {
        let {
            email: {subject, from, date, message}
        } = this.props;
        let rawMessage = {__html: message};

        return (
            <div className="email-view">
                <h1>{subject}</h1>
                <h2>From: <a href={`mailto:${from}`}>{from}</a></h2>
                <h3>{date}</h3>
                <div dangerouslySetInnerHTML={rawMessage} />
                <div className="email-view__button-bar">
                    <button onClick={this._handleDeleteClick.bind(this)}>Delete</button>
                    <button onClick={this._handleCloseClick.bind(this)}>Close</button>
                </div>
            </div>
        );
    }
}
