import QueueArticle from './QueueArticle';

const QueueList = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <QueueArticle key={article._id} article={article} />
      ))}
    </div>
  );
};

export default QueueList;
