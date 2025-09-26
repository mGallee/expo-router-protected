
### Description
When using Expo Router on web, directly entering a URL for `campaign-details/[id]` that exists in both `(creator)` and `(guest)` protected groups causes routing issues. The problem **only occurs on web** when manually entering/refreshing URLs - normal in-app navigation works correctly.

### Current Setup
```
app/
|─ (creator)
|     |─ _layout.tsx
|     |─ index.tsx
│     |─ campaign-details
│          |─ [id]
│               |─ index.tsx
|─ (guest)
|     |─ _layout.tsx
|     |─ index.tsx
│     |─ campaign-details
│          |─ [id]
│               |─ index.tsx
|─ _layout.tsx
|─ index.tsx
```

## Current Behavior
- **Web Browser URL Entry**: When directly entering or refreshing `http://localhost:19006/campaign-details/123` in the browser, the router fails to determine which protected group's version should be displayed based on authentication state
- **Deep Linking**: Similar issues occur with deep links to these routes on web
- **Normal Navigation**: Using in-app navigation (links, buttons, `router.push()`) works correctly and respects authentication state

## Expected Behavior
When accessing `/campaign-details/123` on web:
1. Direct URL entry should respect authentication state and route to the correct group's version
2. URL refresh should maintain the correct group context
3. Deep linking should work properly on web platform

## Reproduction Steps (1)
1. Run `npm run web`
2. Click on "Go to campaign details 123"
3. Reload the page 
4. You will be on the index page instead on campaign details 123

## Reproduction Steps (2)
1. Run `npm run web`
2. Enter the URL http://localhost:19006/campaign-details/123 in your browser
3. You will be on the index page instead on campaign details 123
