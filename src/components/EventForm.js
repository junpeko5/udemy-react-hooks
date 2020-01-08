import React, { useState, useContext } from 'react';
import { CREATE_EVENT, DELETE_ALL_EVENTS } from "../actions";
import AppContext from '../contexts/AppContext';

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const {state, dispatch} = useContext(AppContext);

  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: CREATE_EVENT,
      title,
      body
    });
    setTitle("");
    setBody("");
  };

  const deleteAllEvents = e => {
    e.preventDefault();
    if (window.confirm("全てのイベントを本当に削除しても良いですか？")) {
      dispatch({
        type: DELETE_ALL_EVENTS
      });
    }
  };

  const unCreatable = title === "" || body === "";
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="form-control"
            id="formEventTitle"
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            type="text"
            value={body}
            onChange={e => setBody(e.target.value)}
            className="form-control"
            id="formEventBody"
          />
        </div>
        <button
          type="button"
          onClick={addEvent}
          className="btn btn-primary"
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          type="button"
          onClick={deleteAllEvents}
          className="btn btn-danger"
          disabled={state.length === 0}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
}

export default EventForm;