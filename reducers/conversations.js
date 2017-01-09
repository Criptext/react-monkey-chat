import { ADD_CONVERSATION,
	DELETE_CONVERSATION,
	ADD_CONVERSATIONS,
	DELETE_CONVERSATIONS,
	UPDATE_CONVERSATION_STATUS,
	UPDATE_CONVERSATION_NAME,
	UPDATE_CONVERSATION_ADMIN,
	UPDATE_CONVERSATION_INFO,
	UPDATE_CONVERSATION_UNREAD_COUNTER,
	UPDATE_CONVERSATION_LOADING,
	ADD_MEMBER,
	REMOVE_MEMBER,
	ADD_MESSAGE,
	ADD_MESSAGES,
	UPDATE_MESSAGE_STATUS,
	UPDATE_MESSAGES_STATUS,
	UPDATE_MESSAGE_DATA,
	UPDATE_MESSAGE_DATA_STATUS,
	DELETE_MESSAGE
	} from '../actions'

const conversations = (state = {}, action) => {
	switch(action.type) {
		case ADD_CONVERSATIONS: {
			return {
				...state,
				...action.conversations
			}
		}

		case DELETE_CONVERSATIONS: {
			return {}
		}
		
		case ADD_CONVERSATION: {
			const conversationId = action.conversation.id;
			if(state[conversationId]){
				if(Object.keys(action.conversation.messages.length == 1)){
					var add_message_action = {
						type: ADD_MESSAGE,
						message: action.conversation.messages[Object.keys(action.conversation.messages)[0]],
						conversationId: conversationId,
						unread: true
					}
					return {
						...state,
						[conversationId]: conversation(state[conversationId], add_message_action)
					}
				}else{
					var add_messages_action = {
						type: ADD_MESSAGES,
						conversation: action.conversation,
						messages: action.conversation.messages
					};
					return {
	 					...state,
	 					[conversationId]: conversation(state[conversationId], add_messages_action)
	 				}
				}
			}
			return {
				...state,
				[conversationId]: action.conversation
			}
		}

		case DELETE_CONVERSATION: {
			const conversationId = action.conversation.id;
			let newState = {
				...state,
			}
			delete newState[conversationId];
			return newState;
		}
		
		case UPDATE_CONVERSATION_STATUS: {
			const conversationId = action.conversation.id;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}

		case UPDATE_CONVERSATION_NAME: {
			const conversationId = action.conversation.id;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}

		case UPDATE_CONVERSATION_ADMIN: {
			const conversationId = action.conversation.id;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}

		case UPDATE_CONVERSATION_INFO: {
			const conversationId = action.conversation.id;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}
		
		case UPDATE_CONVERSATION_UNREAD_COUNTER: {
			const conversationId = action.conversation.id;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}
		
		case UPDATE_CONVERSATION_LOADING: {
			const conversationId = action.conversation.id;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}
		
		case ADD_MEMBER: {
			const conversationId = action.conversationId;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}
		
		case REMOVE_MEMBER: {
			const conversationId = action.conversationId;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}

		case ADD_MESSAGE: {
			const conversationId = action.conversationId;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}
		
		case ADD_MESSAGES: {
			const conversationId = action.conversation.id;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}
		
		case UPDATE_MESSAGE_DATA: {
			const conversationId = action.conversationId;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}
		
		case UPDATE_MESSAGE_DATA_STATUS: {
			const conversationId = action.conversationId;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}
		
		case UPDATE_MESSAGE_STATUS: {
			const conversationId = action.conversationId;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}
		
		case UPDATE_MESSAGES_STATUS: {
			const conversationId = action.conversationId;
			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}
		
		case DELETE_MESSAGE: {
			const conversationId = action.conversationId;

			return {
				...state,
				[conversationId]: conversation(state[conversationId], action)
			}
		}

		default:
			return state;
	}
}

const conversation = (state, action) => {
	switch (action.type) {
		case UPDATE_CONVERSATION_STATUS: {
			if( typeof action.conversation.description == 'string') {
				return {
					...state,
					description: action.conversation.description,
					membersTyping: action.conversation.membersTyping || state.membersTyping,
					preview: action.conversation.preview
				}
			}else{
				return {
					...state,
					description: typeof action.conversation.description != 'undefined' ? action.conversation.description : state.description,
					online: typeof action.conversation.online != 'undefined' ? action.conversation.online : state.online,
					lastSeen: action.conversation.lastSeen ? action.conversation.lastSeen : state.lastSeen,
					lastOpenMe: action.conversation.lastOpenMe ? action.conversation.lastOpenMe : state.lastOpenMe,
					membersTyping: action.conversation.membersTyping || state.membersTyping,
					preview: action.conversation.preview
				}
			}
		}

		case UPDATE_CONVERSATION_NAME: {
			return {
				...state,
				name: action.name
			}
		}

		case UPDATE_CONVERSATION_ADMIN: {
			return {
				...state,
				admin: action.admin
			}
		}
		
		case UPDATE_CONVERSATION_INFO: {
			return {
				...state,
				info: action.conversation.info,
				lastModified: action.conversation.lastModified
			}
		}
		
		case UPDATE_CONVERSATION_UNREAD_COUNTER: {
			return {
				...state,
				unreadMessageCounter: action.unreadCounter
			}
		}
		
		case UPDATE_CONVERSATION_LOADING: {
			return {
				...state,
				loading: action.conversation.loading
			}
		}
		
		case ADD_MEMBER: {
			return {
				...state,
				members: members(state.members, action)
			}
		}
		
		case REMOVE_MEMBER: {
			return {
				...state,
				members: members(state.members, action)
			}
		}
		
		case ADD_MESSAGE: {
			var lastMessage;
			if(!state.lastMessage){
				lastMessage = action.message.id
			}else if(action.message.datetimeCreation < state.messages[state.lastMessage].datetimeCreation){
				lastMessage = state.lastMessage;
			}else{
				lastMessage = action.message.id
			}

			var counter = state.unreadMessageCounter;
			if(action.unread){
				counter++;
			}
			return {
				...state,
				messages: messages(state.messages, action),
				lastMessage: lastMessage,
				unreadMessageCounter: counter
			}
		}
		
		case ADD_MESSAGES: {
			return {
				...state,
				messages: messages(state.messages, action),
				loading: action.conversation.loading
			}
		}
		
		case UPDATE_MESSAGE_DATA: {
			return {
				...state,
				messages: messages(state.messages, action)
			}
		}
		
		case UPDATE_MESSAGE_DATA_STATUS: {
			return {
				...state,
				messages: messages(state.messages, action)
			}
		}
		
		case UPDATE_MESSAGE_STATUS: {
			if(state.messages[action.message.oldId]){ 
				let lastMessage = action.message.oldId === state.lastMessage ? action.message.id : state.lastMessage;
				return {
					...state,
					messages: messages(state.messages, action),
					lastMessage: lastMessage
				}
			}else{ // to update 'state' only
				return {
					...state,
					messages: messages(state.messages, action)
				}
			}
		}
		
		case UPDATE_MESSAGES_STATUS: {
			return {
				...state,
				messages: messages(state.messages, action, state.lastOpenMe)
			}
		}
		
		case DELETE_MESSAGE: {
			if(!state.lastMessage){
				return state;
			}

			var lastMessageId = null;
			var maxTimestamp = 0;

			if(state.lastMessage == action.message.id){
				Object.keys(state.messages).forEach(function(mId){
					if(state.messages[mId].datetimeOrder > maxTimestamp && mId != action.message.id){
						maxTimestamp = state.messages[mId].datetimeOrder;
						lastMessageId = state.messages[mId].id;
					}
				})
			}else{
				lastMessageId = state.lastMessage;
			}

			return {
				...state,
				lastMessage: lastMessageId,
				messages: messages(state.messages, action),
			}
		}
	}
	return state;
}

const members = (state, action) => {
	switch (action.type) {
		case ADD_MEMBER: {
			const userId = action.userId;
			return [
				...state,
				userId
			];
		}
		
		case REMOVE_MEMBER: {
			const userId = action.userId;
			let index = state.indexOf(userId);
			if(index > -1){
				return [
					...state.slice(userId, index),
					...state.slice(index + 1)
				]
			}
			
			return state;
		}
	}
	return state;
}

const messages = (state, action, lastOpenMe) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			return {
				...state,
				[action.message.id]: action.message
			}
		}
		
		case ADD_MESSAGES: {
			return {
				...state,
				...action.messages
			}
		}
		
		case UPDATE_MESSAGE_DATA: {
			const messageId = action.message.id;
			return {
				...state,
				[messageId]: message(state[messageId], action)
			}
		}
		
		case UPDATE_MESSAGE_DATA_STATUS: {
			const messageId = action.message.id;
			return {
				...state,
				[messageId]: message(state[messageId], action)
			}
		}
		
		case UPDATE_MESSAGE_STATUS: {
			if(state[action.message.oldId]){ // to update 'oldId' and other params
				const messageId = action.message.oldId;
				const newMessageId = action.message.id;
				let newState = {
					...state,
					[newMessageId]: message(state[messageId], action)
				}
				delete newState[messageId];
				return newState;
			}else if(state[action.message.id]){ // to update 'state' only
				const messageId = action.message.id;
				return {
					...state,
					[messageId]: message(state[messageId], action)	
				}
			}else{
				return state;
			}
		}
		
		case UPDATE_MESSAGES_STATUS: {
			if(action.byLastOpenMe){
				return Object.keys(state).map(messageId => {
					if(state[messageId].status !== action.status && state[messageId].datetimeCreation < lastOpenMe){
						return {
							...state[messageId],
							status: action.status
						}
					}
					return state[messageId];
					
				}).reduce((messages, message) => ({ ...messages, [message.id]: message }), {});
			}else{
				return Object.keys(state).map(messageId => {
					if(state[messageId].status === action.status){
						return state[messageId];
					}
					return {
						...state[messageId],
						status: action.status
					}
				}).reduce((messages, message) => ({ ...messages, [message.id]: message }), {});
			}
		}
		
		case DELETE_MESSAGE: {
			const deleteMessageId = action.message.id;
			let newState = {
				...state,
			}
			delete newState[deleteMessageId];
			return newState;
		}
	}
	return state;
}

const message = (state, action) => {
	switch (action.type) {
		case UPDATE_MESSAGE_DATA: {
			return {
				...state,
				data: action.message.data,
				error: action.message.error
			}
		}
		
		case UPDATE_MESSAGE_DATA_STATUS: {
			return {
				...state,
				isDownloading: action.message.isDownloading
			}
		}
		
		case UPDATE_MESSAGE_STATUS: {
			return {
				...state,
				id: action.message.id,
				status: action.message.status
			}
		}
	}
	return state;
}

export default conversations;