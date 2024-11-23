import { useState } from "react";
import axios from '../axios';

export function FeedbackPage() {

  const [data, setData] = useState({
    name: '',
    from: '', 
    to: 'morphopoghos@gmail.com', 
    subject: '',
    text: '',
  });

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  const handleFeedback = async (event) => {
    event.preventDefault();
    const response = await axios.post('send-mail', data);
    alert(response.data.message);
  }

  return (
    <div className="FeedbackPage">
      <h1 className="title">Feedback</h1>

      <form className="feedbackForm" onSubmit={handleFeedback}>
        <div className="row">
          <div className="inputBox">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required value={data.name} onChange={onChangeInput} />
          </div>

          <div className="inputBox">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="from" required value={data.from} onChange={onChangeInput} />
          </div>
        </div>

        <div className="row">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required value={data.subject} onChange={onChangeInput} />
        </div>
        
        <div className="row">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="text" required value={data.text} onChange={onChangeInput}></textarea>
        </div>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
}