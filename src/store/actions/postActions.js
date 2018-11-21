// var firebase = require('firebase/app');
// require('firebase/auth');
// require('firebase/database');
export const addPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('posts').add({
            ...post,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_POST', post });
        }).catch((err) => {
            dispatch({ type: 'ADD_POST_ERROR', err });
        });
    }
};

export const GetPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();

        firestore.collection("posts").doc(post)
        .then(() => {
            dispatch({ type: 'GET_POST', post });
        }).catch((err) => {
            dispatch({ type: 'GET_POST_ERROR', err });
        });
    }
};





// export function deleteNote(post) {
//     var database = firebase.database();

//     return dispatch =>  database.collection("posts").doc(`/posts/${post}`).delete()

// }

export const deleteNote = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection("posts").doc(post).delete().then(() => {
            dispatch({ type: 'DELETE_POST', post });
        }).catch((err) => {
            dispatch({ type: 'DELETE_POST_ERROR', err });
        });
    }
};
