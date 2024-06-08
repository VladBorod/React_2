import React, { useState } from "react";

export function MessageList() {
  const [messages, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
    ]);

    const deleteComment = (commentId) => {
      setComments(messages.filter((message) => message.id !== commentId));
    };
  
    return messages.map((message) => (
      <div key={message.id}>
        <h2>{message.text}</h2>
        <button className="delete-button" onClick={() => deleteComment(message.id)}>Delete!</button>
      </div>
    ));
}



export default MessageList;