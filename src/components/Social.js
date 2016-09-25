import React from 'react'
import 'styles/social'

class Social extends React.Component {
  render() {
    return (
        <div className='social'>
          <a href="https://www.facebook.com/realboydigital">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com/RealBoyDigital">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="https://instagram.com/realboydigital/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://vimeo.com/channels/rbd">
            <i className="fa fa-vimeo-square"></i>
          </a>
        </div>
    )
  }
}

export default Social;
