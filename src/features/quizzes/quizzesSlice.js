import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        }
    }
});

export const addQuizIdFromTopicId = (quiz) => {
    const { topicId, id } = quiz
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz))
        dispatch(addQuizId({topicId: topicId, quizId: id}))
    }
}


export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = state => state.quizzes.quizzes
export default quizzesSlice.reducer;