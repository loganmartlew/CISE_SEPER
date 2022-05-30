export default (onSuccess, onError) => {
  const moderate = (articleId, data) => {
    fetch(`${import.meta.env.VITE_API_URL}/articles/moderation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ articleId, data }),
    })
      .then(() => {
        onSuccess();
      })
      .catch(() => {
        onError();
      });
  };

  return { moderate };
};
