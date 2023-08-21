import { useUserStore } from '@/store/userStore';
import { ModelsList } from '@/modules/ModelsList';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { QUERY_KEYWORDS } from '@/constants/queryKeywords';
import { getUserModels } from '@/api/models/queries';

const MainPage = () => {
	const user = useUserStore((state) => state.user);
	const navigate = useNavigate();
	const query = useQuery([QUERY_KEYWORDS.MODELS, user?._id], async () => {
		if (!user?._id) return null;
		return await getUserModels(user._id);
	});

	return (
		<div className='container mt-5'>
			<section>
				<h2 className='text-xl'>
					<span className='text-accent font-bold'>{user?.username}'s </span>
					models
				</h2>

				<ModelsList
					models={query.data ?? []}
					isLoading={query.isLoading}
					onModelClick={(model) => {
						navigate(`/model/${model._id}`);
					}}
				/>
			</section>
		</div>
	);
};

export default MainPage;
