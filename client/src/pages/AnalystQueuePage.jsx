import { toast } from 'react-toastify';
import QueuePageLayout from '../features/layout/QueuePageLayout';
import QueueList from '../features/queue/QueueList';
import ModeratorTools from '../features/queue/ModeratorTools';
import useAnalystArticles from '../features/queue/useAnalystArticles';
import PageTitle from '../components/PageTitle';
import useAnalyseArticle from '../features/queue/useAnalyseArticle';

const ModeratorQueuePage = () => {
  const { articles, error, loading, refetch } = useAnalystArticles();

  const onSuccess = () => {
    refetch();
  };

  const onError = (err) => {
    console.log(err);
  };

  const { analyse } = useAnalyseArticle({
    onSuccess,
    onError,
  });

  const onSubmit = (data) => {
    const promise = analyse(articles[0]._id, data);
    toast.promise(promise, {
      pending: {
        render() {
          return 'Submitting Analysis...';
        },
        isLoading: true,
        icon: null,
      },
      success: {
        render() {
          return 'Article Analysed!';
        },
        isLoading: false,
        icon: null,
      },
      error: {
        render() {
          return 'Error submitting article';
        },
        isLoading: false,
        icon: null,
      },
    });
  };

  return (
    <>
      <PageTitle sx={{ mb: 2 }}>Analysis Queue</PageTitle>
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
