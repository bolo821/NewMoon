import React from 'react';
import './index.scss';
import "bootstrap-slider/dist/css/bootstrap-slider.css"
import ReactBootstrapSlider from 'react-bootstrap-slider';

const Slider = props => {
    const { value, setValue } = props;

    return (
        <div className="slider-container-rt">
            <ReactBootstrapSlider
                value={value}
                change={e => setValue(e.target.value)}
                max={100}
                min={0}
            />
        </div>
    )
}

export default Slider;