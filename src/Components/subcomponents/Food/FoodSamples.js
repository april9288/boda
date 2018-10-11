import React from 'react';
import '../SamplePhotos.css';
import { connect } from 'react-redux';
import { requestDetectionActionFromSample } from '../../redux/actions';
import { samplePhotoData } from '../SamplePhotosData';

const mapDispatchToProps = (dispatch) => {
  return {
    onrequestDetectionActionFromSample: (model, url) => dispatch(requestDetectionActionFromSample(model, url)),
  }
}



const PhotoSamples = ({onrequestDetectionActionFromSample}) => {

  const sampleImgs = samplePhotoData.foodSample160.map((val,i) => <img key={val} className="sampleImgStyle" alt='' src={val} onClick={()=>onrequestDetectionActionFromSample("Food", samplePhotoData.foodSample325[i])}/>)
    return (
      <div className="sampleContainer">
        <div><h3>Samples from <a href="https://unsplash.com" className="sampleTextStyle">unsplash.com</a></h3>
        </div>
        <div className="sampleImgContainer">
        {
          sampleImgs
        }
        </div>
      </div>

    );
}

export default connect(undefined, mapDispatchToProps)(PhotoSamples);