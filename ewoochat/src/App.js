import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
export function App() {
	return (
		<ChatEngine
			height='100vh'
			userName='Ewooral'
			userSecret='123456'
			projectID='7583ac04-1751-413d-9619-2e1e3f0f7f1d'
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}
export default App;