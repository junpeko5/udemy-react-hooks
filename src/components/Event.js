import React from 'react';
import { DELETE_EVENT } from '../actions';

const Event = ({ event, dispatch }) => {
  const id = event.id;
  const handleClickDeleteButton = () => {
    if (window.confirm(`イベント(id=${id})を本当に削除しても良いですか？`)) {
      dispatch({
        type: DELETE_EVENT,
        id
      });
    }
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          onClick={handleClickDeleteButton}
          className="btn btn-danger"
        >
          削除
        </button>
      </td>
    </tr>
  );
}

export default Event;