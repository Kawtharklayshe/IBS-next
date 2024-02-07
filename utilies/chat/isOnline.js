const isOnline = async () => {
  if (!window.navigator.onLine) return false;

  function getRandomString() {
    return Math.random().toString(36).substring(2, 15);
  }

  // avoid CORS errors with a request to your own origin
  const url = new URL(window.location.origin);

  // random value to prevent cached responses
  url.searchParams.set("rand", getRandomString());

  try {
    const response = await fetch(url.toString(), { method: "HEAD" });

    return response.ok;
  } catch {
    return false;
  }
};

export default isOnline;
