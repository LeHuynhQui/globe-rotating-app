const initialState = {
    selectedCountry: "",
    region: {},
    rotate:[0,0],
    isDrag: false
}

export const GlobeReducer =  (state = initialState, action) => {
    switch (action.type) {

        case "GET_COUNTRY_AND_REGION": {
            state.selectedCountry = action.selectedCountry;
            state.region = action.region;
            state.rotate = action.rotate
            return { ...state }
        }

        // case "SET_DRAG_AND_CLICK": {
        //     state.isDrag = action.isDrag;
        //     console.log(action.isDrag)
        //     return { ...state }
        // }

        default: {
            return { ...state }
        }
    }
}
