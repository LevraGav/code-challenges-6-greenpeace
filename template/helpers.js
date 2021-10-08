export const getPosts = async () => {
  // EDIT HERE
  try {
      const postDetail = await fetch('https://jsonplaceholder.typicode.com/posts');
      return postDetail.json();
  } 
  catch (error) {
      console.log('getPost', error);
      throw error;
  }
};

export const getPost = async (post_id) => {
  // EDIT HERE
  let postDetail;
  try {
      postDetail = await fetch('https://jsonplaceholder.typicode.com/posts/'+post_id);
  } 
  
  catch (error) {
      console.log('getPost', error);
      throw error;
  }
  let details = await(postDetail.json());
  let object = {
      randomPic : await(getRandomPic()),
      randomProfile : await(getRandomProfile()),
      commentList : await(getPostComments()),
      detail : details,
      author : await(getAuthor(details.userId))
  }
  return object;
};

export const getPostComments = async (post_id) => {
  // EDIT HERE
  try {
      const commentList = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
      return commentList.json();
  } 
  
  catch (error) {
      console.log('getPost', error);
      throw error;
  }
};

export const getAuthor = async (user_id) => {
  // EDIT HERE
  try {
      const author = await fetch('https://jsonplaceholder.typicode.com/users/'+user_id);
      return author.json();
  } 
  
  catch (error) {
      console.log('getPost', error);
      throw error;
  }
};

export const getPostsByAuthor = async (author_id) => {
  // EDIT HERE
  try {
      const authors = await fetch('https://jsonplaceholder.typicode.com/users/'+author_id+'/posts');
      return authors.json();
  } 
  
  catch (error) {
      console.log('getPost', error);
      throw error;
  }
};

export const getRandomPic = async () => {
  try {
      const image = await fetch('https://source.unsplash.com/random/720x480');
      return image.url;
  } 
  
  catch (error) {
      console.log('getRandomPic', error);
      throw error;
  }
};

export const getRandomProfile = async () => {
  try {
      const image = await fetch('https://source.unsplash.com/480x480/?profile');
      return image.url;
  } 
  
  catch (error) {
      console.log('getRandomProfile', error);
      throw error;
  }
};