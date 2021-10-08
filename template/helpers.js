export const getPosts = async () => {
  // EDIT HERE
};

export const getPost = async (post_id) => {
  let detailPost;
    try {
      detailPost = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    } catch (error) {
      console.log('getPost', error);
      throw error;
    }

    let object = {
      randomPic : await(getRandomPic()),
      randomProfile : await(getRandomPic()),
      commentList : await(getPostComments()),
      detail : await(detailPost.json()),
      author : await(getAuthor())
    };
    return object;
};

export const getPostComments = async (post_id) => {
  try {
    const commentList = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    return commentList.json();
  } catch (error) {
    console.log('getPost', error);
    throw error;
  }
};

export const getAuthor = async (user_id) => {
  try {
    const author = await fetch('https://jsonplaceholder.typicode.com/users/'+Math.floor(Math.random() * 10));
    return author.json();
  } catch (error) {
    console.log('getPost', error);
    throw error;
  }
};

export const getPostsByAuthor = async (author_id) => {
  // EDIT HERE
};

export const getRandomPic = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/random/720x480');
    return image.url;
  } catch (error) {
    console.log('getRandomPic', error);
    throw error;
  }
};

export const getRandomProfile = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/480x480/?profile');
    return image.url;
  } catch (error) {
    console.log('getRandomProfile', error);
    throw error;
  }
};
