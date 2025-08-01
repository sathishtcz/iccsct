import Organizingcommittee from "../../shared/components/Organizingcommittee/Organizingcommittee"
import HelmetComponent from "../HelmetComponent/HelmetComponent"

function Committeepage() {
  return (
    <div>
      <HelmetComponent title={'Organizing Committee - International Conference on Computational Systems and Cloud Technologies'} canonical={'https://iccsct.com/organizing-committee'} />
      <Organizingcommittee />
    </div>
  )
}

export default Committeepage