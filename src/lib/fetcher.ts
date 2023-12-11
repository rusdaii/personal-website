const fetcher = ({ method = 'GET', ...args }) => {
  const callbackPromise = async (resolve: any, reject: any) => {
    const finalUrl = args?.options?.isFreshURL
      ? args.url
      : `${process.env.NEXT_PUBLIC_API_BASE_URL}${args.url}`;

    const response = await fetch(finalUrl, {
      method,
      cache: args?.cache ?? args?.next ? undefined : 'no-store',
      ...args,
    });

    const data = await response.json();

    if (!response.ok) {
      reject(data);
    }

    resolve(data);
  };

  return new Promise(callbackPromise);
};

export default fetcher;
