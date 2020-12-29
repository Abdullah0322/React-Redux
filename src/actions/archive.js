import { STORY_ARCHIVE } from '../constants/actionTypes';
import {
    STORIES_ADD,
    STORIES_FETCH,
  } from '../constants/actionTypes';
const doArchiveStory = id => ({
  type: STORY_ARCHIVE,
  id,
});
const doAddStories = stories => ({
    type: STORIES_ADD,
    stories,
  });
   
  const doFetchStories = query => ({
    type: STORIES_FETCH,
    query,
  });
   
  export {
    doAddStories,
    doFetchStories,
    doArchiveStory,
  };
