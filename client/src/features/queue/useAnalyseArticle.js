import { useState } from 'react';
import delay from '../../util/delay';

export default ({ onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);

  const analyse = (articleId, data) => {
    setLoading(true);
    return fetch(`${import.meta.env.VITE_API_URL}/articles/analysis`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ articleId, data }),
    })
      .then((res) => {
        return delay(1000).then(() => res);
      })
      .then((res) => {
        const neterror = !`${res.status}`.match(/^(1|2|3)\d\d$/);
        if (neterror) {
          onError(res.statusText);
          throw Error(res.statusText);
        }
        return res;
      })
      .then(() => {
        setLoading(false);
        onSuccess();
      });
  };

  const reject = (articleId, reason) => {};

  return { analyse, reject, loading };
};
