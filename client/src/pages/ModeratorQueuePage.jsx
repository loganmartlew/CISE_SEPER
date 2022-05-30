import { toast } from 'react-toastify';
import QueuePageLayout from '../features/layout/QueuePageLayout';
import QueueList from '../features/queue/QueueList';
import ModeratorTools from '../features/queue/ModeratorTools';
import useModeratorArticles from '../features/queue/useModeratorArticles';
import useModerateArticle from '../features/queue/useModerateArticle';
import PageTitle from '../components/PageTitle';

const ModeratorQueuePage = () => {
  const { articles, error, loading, refetch } = useModeratorArticles();

  const onSuccess = () => {
    refetch();
  };

  const { moderate } = useModerateArticle({
    onSuccess,
  });

  const onSubmit = (data) => {
    const promise = moderate(articles[0]._id, data);
    toast.promise(promise, {
      pending: 'Moderating Article...',
      success: 'Article Moderated!',
      error: 'Error Moderating Article',
    });
  };

  return (
    <>
      <PageTitle sx={{ mb: 2 }}>Moderation Queue</PageTitle>
      <QueuePageLayout
        error={error}
        loading={loading}
        left={<QueueList articles={articles} />}
        right={<ModeratorTools onSubmit={onSubmit} />}
      />
    </>
  );
};

export default ModeratorQueuePage;
