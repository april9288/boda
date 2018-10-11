import Clarifai from 'clarifai';
const app = new Clarifai.App({apiKey: `${process.env.REACT_APP_API_KEY}`});

export const searchFieldAction = (text) => (dispatch) => {
	dispatch({ type: "REQUEST_DETECTION_INITIATE" })
	dispatch({ type : 'CHANGE_SEARCH_FIELD', payload: text})
}

export const initiateStateAction = () => ({
	type: 'REQUEST_DETECTION_INITIATE'
})

export const requestDetectionAction = (model, url) => (dispatch) => {
	dispatch({ type: "REQUEST_DETECTION_PENDING" })
	let CLARIFAI_MODEL;
	if (model === "Face") {CLARIFAI_MODEL = Clarifai.DEMOGRAPHICS_MODEL}
	else if (model === "Color") {CLARIFAI_MODEL = Clarifai.COLOR_MODEL}
	else if (model === "Food") {CLARIFAI_MODEL = Clarifai.FOOD_MODEL}
    app.models.predict(CLARIFAI_MODEL, url)
    .then(results => dispatch({ type: "REQUEST_DETECTION_SUCCESS", payload: results }))
    .catch(e => dispatch({ type: "REQUEST_DETECTION_FAILED", payload: true }))
}


export const requestDetectionActionFromSample = (model, url) => (dispatch) => {
	dispatch({ type: "REQUEST_DETECTION_INITIATE" })
	dispatch({ type: "CHANGE_SEARCH_FIELD", payload: url })
	dispatch({ type: "REQUEST_DETECTION_PENDING" })
	let CLARIFAI_MODEL;
	if (model === "Face") {CLARIFAI_MODEL = Clarifai.DEMOGRAPHICS_MODEL}
	else if (model === "Color") {CLARIFAI_MODEL = Clarifai.COLOR_MODEL}
	else if (model === "Food") {CLARIFAI_MODEL = Clarifai.FOOD_MODEL}
    app.models.predict(CLARIFAI_MODEL, url)
    .then(results => dispatch({ type: "REQUEST_DETECTION_SUCCESS", payload: results }))
    .catch(e => dispatch({ type: "REQUEST_DETECTION_FAILED", payload: true }))
}
