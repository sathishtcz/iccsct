import React from 'react'
import Aboutus from '../../shared/components/About/Aboutus'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Aboutpage() {
  return (
    <div>
      <HelmetComponent title={'About us - International Conference on Computational Systems and Cloud Technologies'} canonical={'https://iccsct.com/about'} />
      <Aboutus />
    </div>
  )
}
