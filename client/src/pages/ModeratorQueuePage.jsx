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

  const onError = (moderateError) => {
    console.log(moderateError);
  };

  const { moderate, moderateLoading } = useModerateArticle({
    onSuccess,
    onError,
  });

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
