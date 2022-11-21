import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            let id = action.payload.id;

            state.quizzes[id] = {
                id: id,
                name: action.payload.name,
                topicID: action.payload.topicID,
                cardIDs: action.payload.cardIDs
            }
        }
    }
});

export const addQuizForTopicId = (payload) => {
    let id = payload.id;
    let name = payload.name;
    let topicID = payload.topicId;
    let cardIds = payload.cardIds;

    return (dispatch) => {
        // dispatch both actions here:
        // create a new quiz
        dispatch(addQuiz({            
            id,
            name,
            topicID,
            cardIds            
        }));      
        // and associating it with its topic
        dispatch(addQuizId({
            quizId: id,
            topicId: topicID
        }));
    };
};

// Export the selector as well as the action creators and reducer that your slice generates.
export const selectQuizzez = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;