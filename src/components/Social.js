import React from 'react'
import 'styles/social'

class Social extends React.Component {
  render() {
    return (
        <div className='social'>
          <a href="https://www.facebook.com/realboydigital">
            <span className="fa fa-facebook">f</span>
          </a>
          <a href="https://twitter.com/RealBoyDigital">
            <span className="fa fa-twitter">t</span>
          </a>
          <a href="https://instagram.com/realboydigital/">
            <span className="fa fa-instagram">i</span>
          </a>
          <a href="https://vimeo.com/channels/rbd">
            <span className="fa fa-vimeo-square">v</span>
          </a>
        </div>
    )
  }
}

export default Social;
