import React from 'react';

const Audio = props => {
    return (
        <audio className="clip" src={props.url} type="audio/mpeg" id={props.alpha}>
          Your browser doesn't support the <code>audio</code> element
        </audio>
      );
}

export default Audio;