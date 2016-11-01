import React from 'react';

/**
* Content Component
*
* @author Alexandre Moraes | https://github.com/alcmoraes
* @license MIT | http://opensource.org/licenses/MIT
*/
class ContentComponent extends React.Component {

    constructor(props) {
        super(props);

        this.goLink = this.goLink.bind(this);

    }

    /**
     * Go to given URL
     * 
     * @params String url The url to go to
     */
    goLink(url) {
        window.location = url;
    }

    render() {
        return (
            <div className={this.props.featured ? (this.props.promo ? "col-lg-6 col-md-12 col-sm-12" : "col-lg-3 col-md-6 col-sm-6 col-xs-12") : "col-lg-4 col-md-6 col-sm-6 col-xs-12"}>
                <div onTouchTap={this.goLink.bind(this, this.props.feed.url)} className={(this.props.promo ? "promo" : "") + " content-wrapper"} >
                    <div className={this.props.feed.category.toLowerCase().replace(" ","-") + " content-category"}>
                        <span>{this.props.feed.category}</span>
                    </div>
                    {this.props.featured ? (
                        <div className="content-picture-wrapper" style={{backgroundImage: 'url('+this.props.feed.image+')'}}>
                            <span>Read More</span>
                        </div>
                    ) : undefined}
                    <h4 className="content-title">{this.props.feed.title}</h4>
                    <div className="author-cta">
                        <img src={this.props.feed.author_avatar} className="author-avatar img-circle" />
                        <span className="author-by">by {this.props.feed.author_name}</span>
                    </div>
                    <p className="excerpt">
                        {this.props.feed.excerpt}
                    </p>
                </div>
            </div>
        )
    }

}

ContentComponent.propTypes = {
    feed: React.PropTypes.object,
    promo: React.PropTypes.bool,
    featured: React.PropTypes.bool
};

ContentComponent.defaultProps = {
    promo: false,
    featured: false
};

module.exports = ContentComponent;
