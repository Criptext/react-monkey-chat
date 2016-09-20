var packageName = 'redux-monkey-chat/';
export const DELETE_USER_SESSION = packageName+'DELETE_USER_SESSION'
export const ADD_USER_SESSION = packageName+'ADD_USER_SESSION'
export const ADD_USER_CONTACT = packageName+'ADD_USER_CONTACT'
export const ADD_USERS_CONTACT = packageName+'ADD_USERS_CONTACT'
export const UPDATE_USER_SESSION = packageName+'UPDATE_USER_SESSION'

export const ADD_CONVERSATION = packageName+'ADD_CONVERSATION'
export const ADD_CONVERSATIONS = packageName+'ADD_CONVERSATIONS'
export const DELETE_CONVERSATIONS = packageName+'DELETE_CONVERSATIONS'
export const UPDATE_CONVERSATION_STATUS = packageName+'UPDATE_CONVERSATION_STATUS'
export const UPDATE_CONVERSATION_ADMIN = packageName+'UPDATE_CONVERSATION_ADMIN'
export const UPDATE_CONVERSATION_NAME = packageName+'UPDATE_CONVERSATION_NAME'
export const UPDATE_CONVERSATION_UNREAD_COUNTER = packageName+'UPDATE_CONVERSATION_UNREAD_COUNTER'
export const UPDATE_CONVERSATION_LOADING = packageName+'UPDATE_CONVERSATION_LOADING'
export const DELETE_CONVERSATION = packageName+'DELETE_CONVERSATION'

export const ADD_MEMBER = packageName+'ADD_MEMBER'
export const REMOVE_MEMBER = packageName+'REMOVE_MEMBER'

export const ADD_MESSAGE = packageName+'ADD_MESSAGE'
export const ADD_MESSAGES = packageName+'ADD_MESSAGES'
export const UPDATE_MESSAGE_STATUS = packageName+'UPDATE_MESSAGE_STATUS'
export const UPDATE_MESSAGES_STATUS = packageName+'UPDATE_MESSAGES_STATUS'
export const UPDATE_MESSAGE_DATA = packageName+'UPDATE_MESSAGE_DATA'
export const UPDATE_MESSAGE_DATA_STATUS = packageName+'UPDATE_MESSAGE_DATA_STATUS'
export const DELETE_MESSAGE = packageName+'DELETE_MESSAGE'


// ----------------- USER ----------------- //

export const addUserSession = (user) => {
	return {
		type: ADD_USER_SESSION,
		user: user
	}
}

export const deleteUserSession = () => {
	return {
		type: DELETE_USER_SESSION,
	}
}

export const addUserContact = (user) => {
	return {
		type: ADD_USER_CONTACT,
		user: user
	}
}

export const addUsersContact = (users) => {
	return {
		type: ADD_USERS_CONTACT,
		users: users
	}
}

export const updateUserSession = (params) => {
	return {
		type: UPDATE_USER_SESSION,
		params: params
	}
}

// ------------- CONVERSATION ------------- //

export const addConversations = (conversations) => {
	return {
		type: ADD_CONVERSATIONS,
		conversations: conversations
	}
}

export const addConversation = (conversation) => {
	return {
		type: ADD_CONVERSATION,
		conversation: conversation
	}
}

export const updateConversationStatus = (conversation) => {
	return {
		type: UPDATE_CONVERSATION_STATUS,
		conversation: conversation
	}
}

export const updateConversationName = (conversation, name) => {
	return {
		type: UPDATE_CONVERSATION_NAME,
		conversation: conversation,
		name: name
	}
}

export const updateConversationAdmin = (conversation, admins) => {
	return {
		type: UPDATE_CONVERSATION_ADMIN,
		conversation: conversation,
		admin: admins
	}
}

export const updateConversationUnreadCounter = (conversation, unreadCounter) => {
	return {
		type: UPDATE_CONVERSATION_UNREAD_COUNTER,
		conversation: conversation,
		unreadCounter: unreadCounter
	}
}

export const updateConversationLoading = (conversation) => {
	return {
		type: UPDATE_CONVERSATION_LOADING,
		conversation: conversation
	}
}

export const deleteConversations = (conversations) => {
	return {
		type: DELETE_CONVERSATIONS,
	}
}

export const deleteConversation = (conversation) => {
	return {
		type: DELETE_CONVERSATION,
		conversation: conversation
	}
}

// --------------- MEMBER --------------- //

export const removeMember = (userId, conversationId) => {
	return {
		type: REMOVE_MEMBER,
		userId: userId,
		conversationId: conversationId
	}
}

export const addMember = (userId, conversationId) => {
	return {
		type: ADD_MEMBER,
		userId: userId,
		conversationId: conversationId
	}
}

// --------------- MESSAGE --------------- //

export const addMessage = (message, conversationId, unread) => {
	return {
		type: ADD_MESSAGE,
		message: message,
		conversationId: conversationId,
		unread: unread
	}
}

export const addMessages = (conversation, messages) => {
	return {
		type: ADD_MESSAGES,
		conversation: conversation,
		messages: messages
	}
}

export const updateMessageData = (message, conversationId) => {
	return {
		type: UPDATE_MESSAGE_DATA,
		message: message,
		conversationId: conversationId
	}
}

export const updateMessageDataStatus = (message, conversationId) => {
	return {
		type: UPDATE_MESSAGE_DATA_STATUS,
		message: message,
		conversationId: conversationId
	}
}

export const updateMessageStatus = (message, conversationId) => {
	return {
		type: UPDATE_MESSAGE_STATUS,
		message: message,
		conversationId: conversationId
	}
}

export const updateMessagesStatus = (status, conversationId, byLastOpenMe) => {
	return {
		type: UPDATE_MESSAGES_STATUS,
		status: status,
		conversationId: conversationId,
		byLastOpenMe: byLastOpenMe
	}
}

export const deleteMessage = (message, conversationId) => {
	return {
		type: DELETE_MESSAGE,
		message: message,
		conversationId: conversationId
	}
}