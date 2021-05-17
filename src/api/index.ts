import posts from './posts.json';

const api = {
  posts: {
    get: (len?: number): Promise<Post[]> => {
      if (!len) {
        return Promise.resolve(posts);
      }
      const safeLen = Math.max(0, Math.min(posts.length, len));
      return Promise.resolve(posts.slice(0, safeLen));
    },
  },
};

export default api;
