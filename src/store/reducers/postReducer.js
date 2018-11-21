
const postReducer = (state = {posts:[]}, action) => {
    switch (action.type) {
        case 'GET_POST':
            return Object.assign({}, state, {
                posts: action.post
            })
        case 'GET_POST_ERROR':
            console.log('Get post error', action.err);
            return state;
        case 'ADD_POST':
            console.log('add post', action.post, state);
            return state
        case 'ADD_POST_ERROR':
            console.log('add post error', action.err);
            return state;
        case 'DELETE_POST':
            console.log('Delete post', action.post, state);
            return state
            
        case 'DELETE_POST_ERROR':
            console.log('Delete post error', action.err, state);
            return state;
        default:
            return state;
    }
}

export default postReducer;