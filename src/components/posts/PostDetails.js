import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {deleteNote} from '../../store/actions/postActions';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }
      

     handleDelete = () =>{
        this.props.deleteNote(this.props.match.params.id)
        this.setState({
            redirect: true
          })


    }
    render(){
        const renderDelete = () =>{
            if (auth.uid === post.authorId){
                return (
                    <button className="btn btn-danger btn-xs" onClick={this.handleDelete}>
                           deleteNote
                   </button> 
                   
                )
            } else {
                return null
            }
    
        }
        const { post, auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        if (this.state.redirect) return <Redirect to='/'/>
        if(post){
            console.log(post)
    
            return (
                <div className="container section post-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">{post.title}</span>
                            <p>{post.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by {post.authorFirstName} {post.authorLastName}</div>
                            <div>{moment(post.createdAt.toDate()).calendar()}</div>
                            {renderDelete()}
                        </div>
                    </div>
                </div>
            )
        } else{
            return (
                <div className='container center'>
                    <p>
                        Loading posts...
                    </p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.posts;
    const post = posts ? posts[id] : null;
    return {
        post: post,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteNote: (post) => dispatch(deleteNote(post))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'posts' }
    ])
)(PostDetails);