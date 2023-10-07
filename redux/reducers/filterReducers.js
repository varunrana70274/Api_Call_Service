const initialState = {
  filterItemList: [],
  crrPage: '',
  isUpdate: false,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_Item': {
      return {
        filterItemList: action.data,
      };
    }
    case 'ResetFilter': {
      return {
        filterItemList: [],
      };
    }
    case 'Update_Item': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export const AddFilterItem = data => {
  return {
    type: 'Add_Item',
    data,
  };
};

export const resetFilterList = () => {
  return {
    type: 'ResetFilter',
  };
};
export const updateList = data => {
  return {
    type: 'Update_Item',
    payload: data
  };
};
