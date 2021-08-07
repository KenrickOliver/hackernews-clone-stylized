// we need to creat a store
function createStore(reducer) {
    let currentState = reducer(undefined, {});

    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action);
        }
    }
}

const initialState = {
    favorites: []    // we create an array where we will store our added favorites, initial state set to empty array
}

//setting up simple reducer function

function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_FAVORITE": {
            const addedFavorite = action.payload.favorite;
            const favorites = [...state.favorites, addedFavorite]  // we always want to perform state updates immuatably so copy in old state then just ADD to it.
            return { favorites };
        }
        case "REMOVE_FAVORITE": {
            const removedFavorite = action.payload.favorite;
            const favorites = state.favorites.filter((fav) => {
                if(fav.id !== removedFavorite.id) {
                    return fav;
                }
            })
            return { favorites };
        }
        default:
            return state;    
    }
}

// to add anything to state we need an "action" and a "payload(provides data)"
// const action = { type: "ADD_FAVORITE", payload: { favorite: {title: "story1", id: 1} } }

const store = createStore(favoritesReducer); //creating a store and passing our favorite reducer in there



export default store;  // providing the store to the rest of our application