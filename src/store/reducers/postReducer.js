const initState = {
    posts: [
        {id: '1', title: 'Titre 1', content: 'Voici le premier post'},
        {id: '2', title: 'Titre 2', content: 'Voici le deuxième post'},
        {id: '3', title: 'Titre 3', content: 'Voici le troisième post'},
    ]
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            console.log('add post', action.post);
            return state;
        case 'ADD_POST_ERROR':
            console.log('add post error', action.err);
            return state;
        default:
            return state;
    }
}

export default postReducer;