/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  submitComment,
  fetchUserDataByUserId,
} from "../../../services/firebase";
import { getAuth } from "firebase/auth";

function AddComment({ cardData, comments, setComments, commentInput }) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState();

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    async function getUser() {
      const userData = await fetchUserDataByUserId(user.uid);
      setName(userData.username);
    }

    getUser();
  }, []);

  const handleSubmitComment = async (event) => {
    event.preventDefault();

    setComments([...comments, { displayName: name, comment: comment }]);
    setComment("");

    await submitComment(comment, name, cardData);
  };

  if (name) {
    return (
      <div className="border-t border-gray-primary">
        <form
          className="flex justify-between pl-0 pr-5"
          method="POST"
          onSubmit={(event) =>
            comment.length >= 1
              ? handleSubmitComment(event)
              : event.preventDefault()
          }
        >
          <input
            aria-label="Add a comment"
            autoComplete="off"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4"
            type="text"
            name="add-comment"
            placeholder="Add a comment..."
            value={comment}
            onChange={({ target }) => setComment(target.value)}
            ref={commentInput}
          />
          <button
            className={`text-sm font-bold text-blue-medium ${
              !comment && "opacity-25"
            }`}
            type="button"
            disabled={comment.length < 1}
            onClick={handleSubmitComment}
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}
export default AddComment;
