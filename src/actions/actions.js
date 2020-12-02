export const addRestaurant = (text) => ({
    type: 'ADD_RESTAURANT',
    text
})

export const deleteRestaurant = (payload) => ({
    type: 'DELETE_RESTAURANT',
    payload
})

export const addReview = (payload) => ({
    type: 'ADD_REVIEW',
    review: payload
})

export const deleteReview = (payload) => ({
    type: 'DELETE_REVIEW',
    payload
})