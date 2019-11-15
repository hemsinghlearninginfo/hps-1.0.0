import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { uploadFileActions } from '_actions';
import { commonMethods } from '_helpers';
import './quote.css';

class Quote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes: []
        }
    }

    componentDidMount(){
        commonMethods.runQuotes()
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {

        return (
            <div className="container">
                <div className='row'>
                    <div className='col-md-offset-2 col-md-8'>
                        <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#quote-carousel" data-slide-to="0" className="active"></li>
                                <li data-target="#quote-carousel" data-slide-to="1"></li>
                                <li data-target="#quote-carousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="item active">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-3 text-center">
                                                <img className="img-circle quote-img " src="http://www.reactiongifs.com/r/overbite.gif" />
                                            </div>
                                            <div className="col-sm-9">
                                                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!</p>
                                                <small>Someone famous</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-3 text-center">
                                                <img className="img-circle quote-img " src="https://s3.amazonaws.com/uifaces/faces/twitter/mijustin/128.jpg" />
                                            </div>
                                            <div className="col-sm-9">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.</p>
                                                <small>Someone famous</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote>
                                        <div className="row">
                                            <div className="col-sm-3 text-center">
                                                <img className="img-circle quote-img " src="https://s3.amazonaws.com/uifaces/faces/twitter/keizgoesboom/128.jpg" />
                                            </div>
                                            <div className="col-sm-9">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</p>
                                                <small>Someone famous</small>
                                            </div>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                            <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-chevron-left"></i></a>
                            <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { quotes } = state;
    return {
        quotes
    };
}

const connectedQuote = connect(mapStateToProps)(Quote);
export { connectedQuote as Quote };
