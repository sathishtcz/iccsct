import React from 'react'
import Homepage from '../../shared/components/Homepage/Homepage'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Home() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Computational Systems and Cloud Technologies'} canonical={'https://iccsct.com/'} />
      <Homepage />
    </div>
  )
}
