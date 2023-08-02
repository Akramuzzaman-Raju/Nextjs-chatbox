import { useState } from "react";

export default function ChatBox() {
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [user1Messages, setuser1messages] = useState([]); 
  const [user2Messages, setuser2messages] = useState([]); 

  const user1messages = (e) => {setuser1messages([...user1Messages, user1]); 
    setUser1(''); };

  const user2messages = (e) => {setuser2messages([...user2Messages, user2]); 
    setUser2('');};

  return (
    <div >
      <form className="fm">
        <input type="text" id="user1" value={user1} onChange={(e) => setUser1(e.target.value)} required />
        <button id="btn" onClick={user1messages}>User1</button><br /><br /><br />
        <input type="text" id="user2" value={user2} onChange={(e) => setUser2(e.target.value)} required />
        <button id="btn" onClick={user2messages}>User2</button>
      </form>
      <h2>Entered Values:</h2>
      <p><strong>User1:</strong> {user1}</p>
      <p><strong>User2:</strong> {user2}</p>
      
      <h2>Sent Messages:</h2>
      <div>
        <p><strong>User1:</strong></p>
        {user1Messages.map((message, index) => <p key={index}>{message}</p>)}
      </div>
      <div>
        <p><strong>User2:</strong></p>
        {user2Messages.map((message, index) => <p key={index}>{message}</p>)}
      </div>
    </div>
  )
}
