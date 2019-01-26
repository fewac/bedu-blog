
import { UPDATE_TITLE } from '../actions/actionTypes'
const INITIAL_STATE = {
    post: {
        title: '',
        excerpt: '',
        content: '',
        author: ''
    },
    posts: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case UPDATE_TITLE:
            const { post } = state
            post.title = action.payload
            return { ...state, post }
        
        default:
            return state
    }
    return state
}