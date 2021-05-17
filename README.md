## Hover Take Home Challenge

Greetings! This repo contains the template code for Hover's frontend take-home challenge.

## Getting Started
1. Install dependencies `npm i && cd ios && pod install`
2. Run on iOS or Android simulator `npm run ios` or `npm run android`

### The Challenge
The goal of this challenge is to extend the `PostList` and `Video` components to support "auto play."

### Current code outline
Currently the `PostList` component renders a list of full size `PostItem`, and when you scroll it snaps to the nearest post to ensure *only one is on screen at any given time*. The videos in the PostItems are paused by default, because we can't have them all playing at once.

### Challenge Details
Autoplay should work as follows:
- The video of the post that is currently being displayed on the list should play
- All videos that are not the focused video should be paused
- When a user scrolls to the next post, the previously playing video should pause itself, and they next post's video should automatically play itself

### Questions Are Welcome
If you would like clarification on any aspect of this challenge, please don't hesitate to email [ikey@skwads.com](mailto:ikey@skwads.com), he will be happy to help.

Good Luck!