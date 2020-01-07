import React, { useState, useReducer } from 'react';

import Event from './Event'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    });
    setTitle('');
    setBody("");
  }

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" id="formEventTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea type="text" value={body} onChange={(e => setBody(e.target.value))} className="form-control" id="formEventBody" />
        </div>
        <button type="button" onClick={addEvent} className="btn btn-primary">
          イベントを作成する
        </button>
        <button type="submit" className="btn btn-danger">
          全てのイベントを削除する
        </button>
      </form>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
        </thead>
        <tbody>
          { state.map((event) => <Event key={event.id} event={event} dispatch={dispatch} />) }
        </tbody>
      </table>
    </div>
  );
}

export default App;
