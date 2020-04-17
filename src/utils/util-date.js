export const getDatePostandComment = (datePost) => {
  const yearPost = datePost.getFullYear();
  const monthPost = datePost.getMonth() + 1;
  const dayPost = datePost.getDate();
  const hourPost = datePost.toLocaleTimeString();
  const completeDate = `${dayPost}/${monthPost}/${yearPost} a las ${hourPost}`;
  return completeDate;
};
