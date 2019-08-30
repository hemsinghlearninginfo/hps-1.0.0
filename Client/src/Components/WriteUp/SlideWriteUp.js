import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeupActions } from '_actions';
import { InfoBox } from '_controls';
import { Link } from 'react-router-dom';

class SlideWriteUps extends Component {

    componentDidMount() {
        this.props.dispatch(writeupActions.get(4));
    }

    render() {
        const { writeup } = this.props;
        let writeUpsHTML = '';
        if (writeup.items && writeup.items.length > 0) {
            writeUpsHTML = writeup.items.map((item, index) =>
                <li className="col-12 col-md-6 col-lg-3" key={item.id}>
                    <div className="cnt-block equal-hight" >
                        <p>{item.description}</p>
                        <div className="text-muted font-italic pl-5">-- from {item.displayName}</div>
                    </div>
                </li>
            )
        }
        else {
            writeUpsHTML = (<InfoBox type='info' heading='No Writeup'>
                Opps, We don't have any write up about us, would you like to be first. Please login and post your writeup.
                            </InfoBox>)
        }
        return (
            <>
                <section className="shadow-sm p-3 bg-white rounded slides write-up padding-lg">
                    <div className="container text-center">
                        <div className="row heading heading-icon">
                            <h2>User Views</h2>
                        </div>
                        <ul className="row master-items">
                            {writeUpsHTML}
                        </ul>
                        <Link to="/writeup" className="btn btn-info">More Feedback...</Link>
                    </div>
                </section>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { writeup } = state;
    return {
        writeup
    };
}

const connectedSlideWriteUps = connect(mapStateToProps)(SlideWriteUps);
export { connectedSlideWriteUps as SlideWriteUps }; 
