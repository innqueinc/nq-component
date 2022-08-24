import React from 'react';
import Lottie from 'react-lottie';


const defaultProps = {
    loop: true,
    autoplay: true,
}
function Animate({animationData, width, height,autoplay,loop}) {
    const defaultOptions = {
        loop: loop,
        autoplay: autoplay,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <Lottie
            options={defaultOptions}
            width={width || "100%"}
            height={height || "100%"}/>
    )

}
Animate.defaultProps=defaultProps;
export default Animate;
