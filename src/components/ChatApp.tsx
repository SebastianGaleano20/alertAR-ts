import { useState, useEffect, useRef } from "react";
import "../layouts/styles.css";
import { onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  onSnapshot,
  collection,
  addDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { auth, app } from "../firebase/client";
import type { AppProps } from "../types/chat/index";

const db = getFirestore(app);

function App({ communityId }: AppProps) {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;
    await addDoc(collection(db, "messages"), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp(),
    });
    setNewMessage("");
  };

  return (
    <div className="flex flex-col justify-between py-10 min-h-screen">
      {user && (
        <div className="w-full max-w-md mx-auto">
          <div className="chat-box flex-grow overflow-y-auto max-h-[60vh]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message flex flex-col ${
                  msg.data.uid === user.uid ? "items-end" : "items-start"
                }`}
              >
                <span className="text-xs text-gray-900 mb-1">
                  {msg.data.displayName}
                </span>
                <div
                  className={`message flex flex-row p-3 gap-3 rounded-[20px] items-center ${
                    msg.data.uid === user.uid
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={msg.data.photoURL}
                    alt="User Avatar"
                  />
                  <span>{msg.data.text}</span>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="input-container flex mt-4">
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Escribe un mensaje..."
              className="flex-grow p-2 border border-gray-300 rounded-l"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button
              className="bg-blue-500 rounded-r text-white p-3"
              onClick={sendMessage}
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
