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

        this.toggleNav = this.toggleNav.bind(this);
        this.onMenuClick = this.onMenuClick.bind(this);
        this.uniqueCategories = this.uniqueCategories.bind(this);

        this.state = {
            nav: false,
            category: false,
            categories: []
        }
    }

    /**
     * Simply scroll the user to top
     */
    scrollTop() {
        $("html, body").stop().animate({scrollTop:0}, '500', 'swing');
    }

    /**
     * Toggle the navigation
     */
    toggleNav() {
        this.setState({nav: !this.state.nav});
    }

    /**
     * Executed after a category were chosen from the navigation bar
     */
    onMenuClick(cat) {
        this.setState({nav: false, category: cat});
        this.scrollTop();
        this.props.onMenuClick(cat);
    }

    /**
     * Method to create a unique array of categories
     * from given feeds array
     */
    uniqueCategories() {
        let categories = [];
        for(let i = 0; i < this.props.persistentFeeds.length; i++) {
            if(categories.indexOf(this.props.persistentFeeds[i].category) < 0) {
                categories.push(this.props.persistentFeeds[i].category);
            }
        }
        return categories;
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
                                    <a className={!this.state.category ? "active" : ""} onTouchTap={this.state.category ? this.onMenuClick.bind(this, false) : this.toggleNav} href="javascript:void(0)">ALL</a>
                                </li>
                                {this.uniqueCategories().splice(0,5).map((cat, i) =>
                                    (<li key={i}>
                                        <a className={this.state.category == cat ? "active" : ""} onTouchTap={this.state.category != cat ? this.onMenuClick.bind(this, cat) : this.toggleNav} href="javascript:void(0)">{cat.toUpperCase()}</a>
                                    </li>)
                                )}
                                {this.uniqueCategories().splice(5).map((cat, i) =>
                                    (<li className="mobile-category" key={i}>
                                        <a className={this.state.category == cat ? "active" : ""} onTouchTap={this.state.category != cat ? this.onMenuClick.bind(this, cat) : this.toggleNav} href="javascript:void(0)">{cat.toUpperCase()}</a>
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
    onMenuClick: React.PropTypes.func,
    persistentFeeds: React.PropTypes.array,
};

module.exports = CKLNavBarComponent;