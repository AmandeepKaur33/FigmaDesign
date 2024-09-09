const ImgReducer = (state,action) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            return {
              ...state,
              [action.field]: action.value,
            };
        case "SUBMIT":
            return{
                ...state,
                images: action.images,
            }
        default: 
        return state;
    }
    }
    
    export default ImgReducer;