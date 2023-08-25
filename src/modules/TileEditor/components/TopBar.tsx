import { IoMdAdd } from "react-icons/io"
import InstrumentButton from "./InstrumentButton"
// import { FiArrowLeft, FiArrowRight, FiMove } from 'react-icons/fi'
import { MdOutlineDelete } from 'react-icons/md'
import { Tool } from "../types/tools"
import ShapeColorList from "./ShapeColorList"
import { useToolsStore } from "../store/toolsStore"

const TopBar = () => {
  const toolsDisabled = useToolsStore(state => state.disabled);
  
  return (
    <div className="bg-base-200">
      <ul className="p-3 flex gap-4 items-center">
        <li className="btn-group">
          {/* <InstrumentButton 
            icon={<FiArrowLeft size={'1.5rem'} />}
          />
          <InstrumentButton 
            icon={<FiArrowRight size={'1.5rem'} />}
          /> */}
        </li>

        <li>
          <InstrumentButton 
            disabled={toolsDisabled}
            tool={Tool.ADD}
            icon={<IoMdAdd className="mb-2" size={'1.5rem'} />}
            label="Add tile" 
          />
        </li>

        <li>
          <InstrumentButton 
            disabled={toolsDisabled}
            tool={Tool.REMOVE}
            icon={<MdOutlineDelete className="mb-2" size={'1.5rem'} />}
            label="Remove tile"
          />
        </li>

        {/* <li>
          <InstrumentButton 
            tool={Tool.MOVE}
            icon={<FiMove size={'1.5rem'} className="mb-2" />}
            label="Move tile"
          />
        </li> */}
      </ul>

      <ShapeColorList />
    </div>
  )
}

export default TopBar