import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import Home from '@/components/pages/Home';
import generateMetadata from '@/lib/metadata';
import { getQueryClient } from '@/lib/queryClient';
import { getProjectsKey } from '@/query/project';
import { getProjects } from '@/repositories/project';

export const metadata = generateMetadata(
  { title: 'Home' },
  { withSuffix: true }
);

const HomePage = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: getProjectsKey(),
    queryFn: getProjects,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Home />
    </HydrationBoundary>
  );
};

export default HomePage;
