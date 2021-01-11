import React, { Component } from 'react';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

export class AppProfile extends Component {

    constructor() {
        super();
        this.state = {
            expanded: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        this.setState({ expanded: !this.state.expanded });
        event.preventDefault();
    }

    render() {
        return (
            <div className="layout-profile">
                <div>
                    <img src="assets/images/avatar.png" alt="" />
                </div>
                <button className="p-link layout-profile-link" onClick={this.onClick}>
                    <span className="username">Nome do usuário</span>
                    <i className="pi pi-fw pi-cog" />
                </button>
                <CSSTransition classNames="p-toggleable-content" timeout={{ enter: 1000, exit: 450 }} in={this.state.expanded} unmountOnExit>
                    <ul className={classNames({ 'layout-profile-expanded': this.state.expanded })}>
                        <li><button className="p-link"><i className="pi pi-fw pi-user" /><span>Account</span></button></li>
                        <li><button className="p-link"><i className="pi pi-fw pi-inbox" /><span>Notifications</span><span className="menuitem-badge">2</span></button></li>
                        <li><button className="p-link"><i className="pi pi-fw pi-power-off" /><span>Logout</span></button></li>
                    </ul>
                </CSSTransition>
            </div>
        );
    }
}