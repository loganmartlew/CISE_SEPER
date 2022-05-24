import QueuePageLayout from '../features/layout/QueuePageLayout';
import QueueList from '../features/queue/QueueList';
import useModeratorArticles from '../features/queue/useModeratorArticles';

const ModeratorQueuePage = () => {
  const { articles, error, loading } = useModeratorArticles();

  return (
    <QueuePageLayout
      error={error}
      loading={loading}
      left={<QueueList articles={articles} />}
      right={null}
    />
  );
};

export default ModeratorQueuePage;
