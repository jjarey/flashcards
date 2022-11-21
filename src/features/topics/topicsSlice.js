import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            let id = action.payload.id;

            state.topics[id] = {
                id: id,
                name: action.payload.name,
                icon: action.payload.icon,
                quizIds: []
            }
        },
        addQuizId: (state, action) => {
            // Find the correct topic in state...
            // and push the payload’s quizId into that topic’s quizIds array.
            state.topics[action.payload.topicId].quizIds.push(action.payload.quizId);
        }
    }
});

// Export the selector as well as the action creators and reducer that your slice generates.
export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;