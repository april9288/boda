export const searchFieldReducer = (state = {searchField: ''}, action = {}) => {
	switch(action.type) {
		case "CHANGE_SEARCH_FIELD":
			return Object.assign({}, state, {searchField: action.payload});
    case "REQUEST_DETECTION_INITIATE":
      return Object.assign({}, state, {searchField: ''})
		default:
			return state;
	}
}

const initialStateResults = {
  detectionResults: '',
  isPending: false,
  error: false
}

export const requestDetectionReducer = (state=initialStateResults, action={}) => {
  switch (action.type) {
    case "REQUEST_DETECTION_PENDING":
      return Object.assign({}, state, {isPending: true})
    case "REQUEST_DETECTION_SUCCESS":
      return Object.assign({}, state, {detectionResults: action.payload, isPending: false})
    case "REQUEST_DETECTION_FAILED":
      return Object.assign({}, state, {error: action.payload, isPending: false})
    case "REQUEST_DETECTION_INITIATE":
      return Object.assign({}, state, {detectionResults: '', error: false, isPending: false})
    default:
      return state
  }
}
