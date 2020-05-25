import {EMOJIS, COMMENT_TEXT, NAMES} from '../const.js';
import {getRandomElement, getRandomDateTime, sortMinToMax} from '../utils/common.js';

const generateComment = () => {
  return {
    commentId: String(new Date() + Math.random()),
    commentEmotion: getRandomElement(EMOJIS),
    commentText: getRandomElement(COMMENT_TEXT),
    commentAuthor: getRandomElement(NAMES),
    commentDate: getRandomDateTime(),
  };
};

const generateComments = (count) => {
  return new Array(count).fill(``).map(generateComment).sort((a, b) => sortMinToMax(a.date, b.date));
};

export {generateComment, generateComments};
