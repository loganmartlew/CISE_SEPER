import QueuePageLayout from '../features/layout/QueuePageLayout';
import QueueList from '../features/queue/QueueList';
import ModeratorTools from '../features/queue/ModeratorTools';
import useModeratorArticles from '../features/queue/useModeratorArticles';
import PageTitle from '../components/PageTitle';

const ModeratorQueuePage = () => {
  const { articles, error, loading } = useModeratorArticles();

  return (
    <>
      <PageTitle sx={{ mb: 2 }}>Moderation Queue</PageTitle>
      <QueuePageLayout
        error={error}
        loading={loading}
        left={<QueueList articles={articles} />}
        right={<ModeratorTools />}
      />
    </>
  );
};

export default ModeratorQueuePage;
