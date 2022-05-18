import columns from './columns';

export const defaultState = {
  // columns: columns.map((column) => ({
  //   name: column.accessor,
  //   active: true,
  // })),
  columns: columns.reduce((newColumns, column) => {
    return {
      ...newColumns,
      [column.accessor]: true,
    };
  }, {}),
  practice: '',
};

const actions = {
  TOGGLE_COLUMN: 'togglecolumn',
  SET_PRACTICE: 'setpractice',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_COLUMN: {
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload]: !state.columns[action.payload],
        },
      };
    }
    case actions.SET_PRACTICE: {
      return {
        ...state,
        practice: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const toggleColumn = (name) => {
  return {
    type: actions.TOGGLE_COLUMN,
    payload: name,
  };
};

export const setPractice = (practice) => {
  return {
    type: actions.SET_PRACTICE,
    payload: practice,
  };
};
