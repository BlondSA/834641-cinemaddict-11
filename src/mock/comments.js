import {EMOJIS, COMMENT_TEXT, NAMES} from '../const.js';
import {getRandomElement, getRandomDateTime, sortMinToMax, formatCommentDate} from '../utils/common.js';

const generateComment = () => {
  return {
    commentId: String(new Date() + Math.random()),
    commentEmotion: getRandomElement(EMOJIS),
    commentText: getRandomElement(COMMENT_TEXT),
    commentAuthor: getRandomElement(NAMES),
    commentDate: formatCommentDate(getRandomDateTime(new Date(2015, 0, 1), new Date())),
  };
};

const generateComments = (count) => {
  return new Array(count).fill(``).map(generateComment).sort((a, b) => sortMinToMax(a.date, b.date));
};

export {generateComment, generateComments};
