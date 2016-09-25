import React from 'react'
import 'styles/home'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className='real'>
          <span>r</span>
          <span>e</span>
          <span>a</span>
          <span>l</span>
        </div>
        <div className='boy'>
          <span>b</span>
          <span className='center-piece'/>
          <span>y</span>
        </div>
        <div className='digital'>
          <span>d</span>
          <span>i</span>
          <span>g</span>
          <span>i</span>
          <span>t</span>
          <span>a</span>
          <span>l</span>
        </div>
      </div>
    )
  }
}

export default Home;
