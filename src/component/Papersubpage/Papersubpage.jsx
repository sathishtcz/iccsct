import React from 'react'
import PaperSub from '../../shared/components/PaperSub/PaperSub'
import HelmetComponent from '../HelmetComponent/HelmetComponent'

export default function Papersubpage() {
  return (
    <div>
      <HelmetComponent title={'Paper Submission - International Conference on Computational Systems and Cloud Technologies'} canonical={'https://iccsct.com/paper-submission'} />
      <PaperSub />
    </div>
  )
}
