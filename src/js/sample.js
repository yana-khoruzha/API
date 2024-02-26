function getCommentsbyPostId(postId) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/comments';
  const PARAMS = `?id=${postId}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      header1: 'hello',
      header2: 'hi',
    },
  }

  return fetch(url, options).then(res => {
    return res.json();
  }).then(data => {
    console.log(data)
  });
}

getCommentsbyPostId(1);
getCommentsbyPostId(2);