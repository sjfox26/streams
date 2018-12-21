import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if ( stream.userId === this.props.currentUserId ) {
            return (
                <div>
                    <Link to={`/streams/edit/${stream.id}`}>Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`}>Delete</Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
           return(
               <div key={stream.id}>
                   <Link to={`/streams/${stream.id}`}>
                       <div>{stream.title}</div>
                   </Link>
                   <div>{stream.description}</div>
                   {this.renderAdmin(stream)}
               </div>
           );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <Link to="/streams/new">
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div>{this.renderList()}</div>
                <div>{this.renderCreate()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);