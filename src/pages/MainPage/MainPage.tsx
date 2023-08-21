import { useUserStore } from '@/store/userStore';
import { ModelsList } from '@/modules/ModelsList';
import { useNavigate } from 'react-router-dom';
import { useUserModels } from '@/hooks/useUserModels';

const MainPage = () => {
	const user = useUserStore((state) => state.user);
	const navigate = useNavigate();
	const { data: models, isLoading } = useUserModels(user?._id ?? null)

	return (
		<div className='container mt-5'>
			<section>
				<h2 className='text-xl'>
					<span className='text-accent font-bold'>{user?.username}'s </span>
					models
				</h2>

				<ModelsList
					models={models ?? []}
					isLoading={isLoading}
					onModelClick={(model) => {
						navigate(`/model/${model._id}`);
					}}
				/>
			</section>
		</div>
	);
};

export default MainPage;
