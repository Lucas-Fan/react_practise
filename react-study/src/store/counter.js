export const counterReducer = function (state = 0, action) {
  const num = action.payload || 1;
  switch (action.type) {
    case 'add':
      return state + num;
    case 'minus':
      return state - num;
    default:
      return state;
  }
};

export const add = (num) => ({ type: 'add', payload: num }); // action creator
export const minus = () => ({ type: 'minus' });
// 异步的返回的是函数
export const asyncAdd = () => dispatch => {
  // 异步调用在这里
  setTimeout(() => {
    dispatch({ type: 'add' })
  }, 1000);
};