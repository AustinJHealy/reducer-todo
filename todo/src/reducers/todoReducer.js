export const initialState = [
  { todo: "Learn about reducers", completed: false, id: 3892987589 },
  {
    todo: "Learn about Redux",
    completed: false,
    id: 3849347847,
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "COMPLETED_TODO":
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item;
      });

    case "CLEAR_COMPLETED_TODO":
      return state.filter((item) => !item.completed);

    default:
      return state;
  }
};
