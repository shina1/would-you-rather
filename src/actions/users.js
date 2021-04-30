import { saveQuestionAnswer } from "../utils/API";
import { addAnswerToQuestion } from "../actions/questions";

// exported actions
export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER_TO_USER = "ADD_ANSWER_TO_USER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

// action creators
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

function addAnswerToUser(authenticatedUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authenticatedUser,
    qid,
    answer,
  };
}

export function handleSaveQuestionAnswer(authenticatedUser, qid, answer) {
  return (dispatch) => {
    dispatch(addAnswerToUser(authenticatedUser, qid, answer));
    dispatch(addAnswerToQuestion(authenticatedUser, qid, answer));

    return saveQuestionAnswer(authenticatedUser, qid, answer).catch((e) => {
      console.warn("Error in handleSaveQuestionAnswer:", e);
    });
  };
}

export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author,
  };
}
