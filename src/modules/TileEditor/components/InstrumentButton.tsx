import { useEffect, useState } from "react";
import { useToolsStore } from "../store/toolsStore";
import { Tool } from "../types/tools";

interface InstrumentButtonProps {
	tool: Tool;
	label?: string;
	icon?: React.ReactNode;
	disabled?: boolean;
	onClick?: () => void;
}

const InstrumentButton: React.FC<InstrumentButtonProps> = ({
	icon,
	label,
	onClick,
	tool,
	disabled
}) => {
	const selectedTool = useToolsStore(state => state.tool)
	const selectTool = useToolsStore(state => state.selectTool)
	const unselectTool = useToolsStore(state => state.unselect)
	const [isSelected, setIsSelected] = useState<boolean>()

	useEffect(() => {
		setIsSelected(tool === selectedTool)
	}, [selectedTool])

	return (
		<button
			disabled={disabled}
			type="button"
			onClick={() => {
				if (isSelected) {
					unselectTool()
				} else {
					selectTool(tool)
				}
			}}
			className={`
                btn
                ${isSelected ? 'btn-active btn-ghost' : ''} 
                flex flex-col items-center
				h-fit p-2
            `}
		>
			{icon}

			<h4 className='text-[.9rem]'>{label}</h4>
		</button>
	);
};

export default InstrumentButton;
