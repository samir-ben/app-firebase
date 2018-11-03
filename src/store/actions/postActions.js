export const addPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('posts').add({
            ...post,
            authorFirstName: 'Sam',
            authorLastName: 'Ben',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_POST', post });
        }).catch((err) => {
            dispatch({ type: 'ADD_POST_ERROR', err });
        });
    }
};