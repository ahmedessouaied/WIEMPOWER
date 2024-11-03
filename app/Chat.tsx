"use client";

import { useChat } from "ai/react";
import { useRef, useState } from "react";
import "./styles.css";

export default function Chat() {
  const { messages, input, handleSubmit, handleInputChange, isLoading } =
    useChat({
      api: "/api/chat",
    });

  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event) => {
    handleSubmit(event, {
      experimental_attachments: files,
    });

    setFiles(undefined);
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 2000);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const formatAssistantMessage = (content) => {
    return content
      .replace(/\*\*/g, "\n**")
      .replace(/\\times/g, "×")
      .replace(/\\frac{([^}]+)}{([^}]+)}/g, "($1/$2)")
      .replace(/\\\((.*?)\\\)/g, "($1)");
  };
  return (
    <div className="chat-container">
      <div className="messages">
        {messages.length === 0 ? (
          <span className="text-center absolute bottom-10 left-6 text-gray-400 ">
            You're welcome to ask anything...
          </span>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`message ${message.role}`}>
              <div className="message-content">
                {formatAssistantMessage(message.content)}
                <div className="attachments">
                  {message.experimental_attachments
                    ?.filter((attachment) =>
                      attachment.contentType.startsWith("image/")
                    )
                    .map((attachment, index) => (
                      <img
                        key={`${message.id}-${index}`}
                        src={attachment.url}
                        alt={attachment.name}
                        className="attachment-image"
                      />
                    ))}
                </div>
              </div>
            </div>
          ))
        )}

        {isLoading && (
          <div className="loading-indicator">Generating message...</div>
        )}
        {uploadSuccess && (
          <div className="upload-success">Upload was successful!</div>
        )}
      </div>

      <form className="input-container" onSubmit={handleFormSubmit}>
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="attachment-button"
        >
          📎
        </button>
        <input
          type="file"
          onChange={(event) => {
            if (event.target.files) {
              setFiles(event.target.files);
            }
          }}
          multiple
          ref={fileInputRef}
          className="file-input"
        />
        <input
          value={input}
          placeholder="Send a message..."
          onChange={handleInputChange}
          disabled={isLoading}
          className="text-input"
        />
      </form>
    </div>
  );
}
