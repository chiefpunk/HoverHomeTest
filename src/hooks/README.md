## Hooks

### `usePosts()` An easy way to get the list of posts
```ts
const posts = usePosts();
// posts = [{ video: '', thumbnailUrl: '', id: '' } ...]
```

### `useViewLayout()` An easy way to measure components` sizes
```ts
const [viewLayout, onViewLayout] = useViewLayout();
// viewLayout = { x: 0, y: 0, height: 0, width: 0 }

return <View onLayout={onViewLayout} />
```