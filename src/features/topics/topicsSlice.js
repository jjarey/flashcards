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
        }
    }
});

// Export the selector as well as the action creators and reducer that your slice generates.
export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;