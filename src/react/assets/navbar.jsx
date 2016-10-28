import React from 'react';

/**
* Navigation bar component
*
* @author Alexandre Moraes | https://github.com/alcmoraes
* @license MIT | http://opensource.org/licenses/MIT
*/
class CKLNavBarComponent extends React.Component {

    constructor(props) {
        super(props);

        this.categories = [
            "politics",
            "business",
            "tech",
            "science",
            "sports"
        ];

        this.toggleNav = this.toggleNav.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);

        this.state = {
            nav: false,
            category: false
        }
    }

    toggleNav() {
        this.setState({nav: !this.state.nav});
    }

    onMenuClick(cat) {
        this.setState({nav: false, category: cat});
        this.props.onMenuClick(cat);
    }

    render() {
        return (
            <nav className="cheesecake-nav">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" onTouchTap={this.toggleNav}>
                            <img src="/static/img/menu@2x.png"/>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src="/static/img/logo@2x.png"/>
                        </a>
                    </div>
                    <div className={"navbar-collapse " + (this.state.nav ? "on" : "")}>
                        <div className="container">
                            <ul className="nav navbar-right">
                                <li>
                                    <a className={!this.state.category ? "active" : ""} onTouchTap={this.onMenuClick.bind(this, false)} href="javascript:void(0)">ALL</a>
                                </li>
                                {this.categories.map((cat, i) =>
                                    (<li key={i}>
                                        <a className={this.state.category == cat ? "active" : ""} onTouchTap={this.onMenuClick.bind(this, cat)} href="javascript:void(0)">{cat.toUpperCase()}</a>
                                    </li>)
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}

CKLNavBarComponent.propTypes = {
    onMenuClick: React.PropTypes.func
};

module.exports = CKLNavBarComponent;