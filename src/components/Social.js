import React from 'react'
import 'styles/social'

class Social extends React.Component {
  render() {
    return (
        <div className='social'>
          <a href="https://www.facebook.com/realboydigital">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="https://twitter.com/RealBoyDigital">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="https://instagram.com/realboydigital/">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="https://vimeo.com/channels/rbd">
            <i class="fa fa-vimeo-square"></i>
          </a>
        </div>
    )
  }
}

export default Social;
