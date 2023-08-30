import { AccessibilityIcon } from '@/components/AccessibilityIcon';
import { useModelFloors } from '@/hooks/useModelFloors';
import { useTargetModel } from '@/hooks/useTargetModel';
import { FloorsList } from '@/modules/FloorsList';
import { ModelViewer } from '@/modules/ModelViewer';
import { Id } from '@convex/_generated/dataModel';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ModelPage = () => {
	const { modelId } = useParams();
	const { data: floors } = useModelFloors(modelId as Id<'models'>);
	const { data: model, isLoading } = useTargetModel(modelId as Id<'models'>);
	const navigate = useNavigate();

	return (
		<div className='container h-full py-12 flex gap-10 justify-between'>
			<div className='w-1/2 gap-5 flex flex-col justify-between h-full'>
				<div className='flex overflow-hidden rounded-sm '>
					<div className='bg-base-200 w-2/3 p-5'>
						<h2 className='text-2xl text-accent'>{model?.name}</h2>

						<p className='text-sm mt-2 opacity-40 text-white'>
							{model?.address}
						</p>
					</div>

					<div className='bg-base-300 w-1/3 p-5 flex items-center justify-center'>
						<AccessibilityIcon
							isPrivate={!!model?.private}
							size='2rem'
							className='text-accent'
						/>
					</div>
				</div>

				<div className='flex-1'>
					<div className='bg-base-200 mb-3 flex justify-between items-center p-3'>
						<div></div>

						<Link
							to={`/model/${model?._id}/floor/create`}
							className='btn btn-ghost btn-square'
						>
							<AiOutlinePlus
								className='text-accent'
								size='2rem'
							/>
						</Link>
					</div>
					<FloorsList
						onItemClick={(floor) =>
							navigate(`/model/${floor.model}/floor/${floor._id}`)
						}
						floors={floors ?? []}
						isLoading={isLoading}
						itemOptions={{ delete: true, edit: true }}
					/>
				</div>
			</div>

			<div className='w-1/2 bg-base-200'>
				<ModelViewer  floors={floors ?? []} />
			</div>
		</div>
	);
};

export default ModelPage;
