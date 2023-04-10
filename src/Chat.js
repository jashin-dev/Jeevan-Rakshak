import React, { useState } from 'react'
import './Chat.css'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import Footer from './Footer'
import Navbar from './Navbar'

const Chat = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>

				<div>
					<input
						placeholder='Username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<button onClick={() => createDirectChat(creds)}>
						Create
					</button>
				</div>
			</div>
		)
	}

	return (
		<div>
			<Navbar />
			<ChatEngine
				height='100vh'
				userName='user2'
				userSecret='123456'
				projectID='5bae76a3-971d-4ea2-bc92-a1155af1de85'
				renderNewChatForm={(creds) => renderChatForm(creds)}
			/>
			<Footer />
		</div>
	)
}

export default Chat;
