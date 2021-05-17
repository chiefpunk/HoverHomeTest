import React, { useCallback, useState, useRef } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { usePosts, useViewLayout } from '../hooks';
import PostItem from './PostItem';

interface PostListProps {}
// TODO: Extend PostList component to support autoplay
const PostList: React.FC<PostListProps> = () => {
  const posts = usePosts(2);
  const [viewLayout, onViewLayout] = useViewLayout();
  const [itemInViewId, setItemInViewId] = useState<string>("0");

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 75,
    minimumViewTime: 5,
  })

  const onViewableItemsChanged = useCallback(
    (info: { viewableItems : any }): void => {
      const { viewableItems } = info;

      const [viewableItem] = viewableItems;

      if (viewableItem) {
        const { key } = viewableItem;

        setItemInViewId(key);
      } else {
        setItemInViewId("0");
      }
    },
    []
  );

  const renderItem: ListRenderItem<Post> = useCallback(
    ({ item: post }) => {
      return <PostItem key={post.id} post={post} size={viewLayout} focusedItem = {itemInViewId} />;
    },
    [viewLayout, itemInViewId],
  );

  const getItemLayout = useCallback(
    (_, index: number) => {
      return {
        length: viewLayout.height,
        offset: viewLayout.height * index,
        index,
      };
    },
    [viewLayout],
  );

  return (
    
    <FlatList
      style={{ flex: 1, backgroundColor: 'red' }}
      onLayout={onViewLayout}
      data={posts}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      snapToAlignment="start"
      pagingEnabled
      removeClippedSubviews
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig.current}
    />
  );
};

export default PostList;
