export const getAllPosts = async () => {
  const response = await fetch("/api/posts");

  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
};

export const getSearchPosts = async (search: string) => {
  const response = await fetch(`/api/posts?q=${search}`);

  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
};

export const getPost = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!response.ok) throw new Error("Unable to fetch post!");

  return response.json();
};
