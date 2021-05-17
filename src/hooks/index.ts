import { useState, useEffect, useCallback } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';
import api from '../api';

export function usePosts(len: number) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    api.posts.get(len).then(setPosts);
  }, [len]);

  return posts;
}

export function useViewLayout(): [
  LayoutRectangle,
  (e: LayoutChangeEvent) => void,
] {
  const [layout, setLayout] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setLayout(event.nativeEvent.layout);
  }, []);

  return [layout, onLayout];
}
