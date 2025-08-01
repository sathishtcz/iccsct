import React from 'react'
import Keydates from '../../shared/components/Keydates/Keydates'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Keydatepage() {
  return (
    <div>
      <HelmetComponent title={'Key Dates - International Conference on Computational Systems and Cloud Technologies'} canonical={'https://iccsct.com/key-dates'} />
      <Keydates />
    </div>
  )
}
