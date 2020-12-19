import cuid from 'cuid';
export const cuidFn = cuid

export default function manageRestaurants(state={
    restaurants:[],
    reviews:[]
}, action) {

  let idx;
  
  switch(action.type){
      case 'Add_Place':
        const restaurant ={text: action.text, id: cuidFn()}
          return{
              ...state,
              restaurants: [...state.restaurants, restaurant],


          }
       case 'Delete_Place':
          return{
             restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
          }

        case 'Add_Review':
            const review ={text: action.review.text, restaurantId: action.review.restaurantId,id: cuidFn()}
            return{
                ...state,
                reviews: [...state.reviews, review],
  
  
            }
        case 'Delete_Review':
            return{
               reviews: state.reviews.filter(review => review.id !== action.id)
            }
  


        default:
            return state;

  }

}
