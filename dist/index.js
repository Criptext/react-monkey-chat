(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("redux"));
	else if(typeof define === 'function' && define.amd)
		define(["redux"], factory);
	else if(typeof exports === 'object')
		exports["ReduxMonkeyChat"] = factory(require("redux"));
	else
		root["ReduxMonkeyChat"] = factory(root["redux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.actions = exports.reducer = undefined;

	var _reducers = __webpack_require__(1);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _actions = __webpack_require__(4);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.reducer = _reducers2.default;
	exports.actions = actions;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _redux = __webpack_require__(2);

	var _users = __webpack_require__(3);

	var _users2 = _interopRequireDefault(_users);

	var _conversations = __webpack_require__(5);

	var _conversations2 = _interopRequireDefault(_conversations);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducer = (0, _redux.combineReducers)({
		conversations: _conversations2.default,
		users: _users2.default
	});

	exports.default = reducer;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actions = __webpack_require__(4);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var users = function users() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case _actions.ADD_USER_SESSION:
				return _extends({}, state, {
					userSession: action.user
				});

			case _actions.DELETE_USER_SESSION:
				return {
					userSession: null
				};

			case _actions.ADD_USERS_CONTACT:
				return _extends({}, state, action.users);

			case _actions.ADD_USER_CONTACT:
				var userId = action.user.id;
				return _extends({}, state, _defineProperty({}, userId, action.user));

			case _actions.UPDATE_USER_SESSION:
				return _extends({}, state, _defineProperty({}, 'userSession', userSession(state['userSession'], action)));

			default:
				return state;
		}
	};

	var userSession = function userSession(state, action) {
		switch (action.type) {
			case _actions.UPDATE_USER_SESSION:
				return _extends({}, state, action.params);

			default:
				return state;
		}
	};

	exports.default = users;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var packageName = 'redux-monkey-chat/';
	var DELETE_USER_SESSION = exports.DELETE_USER_SESSION = packageName + 'DELETE_USER_SESSION';
	var ADD_USER_SESSION = exports.ADD_USER_SESSION = packageName + 'ADD_USER_SESSION';
	var ADD_USER_CONTACT = exports.ADD_USER_CONTACT = packageName + 'ADD_USER_CONTACT';
	var ADD_USERS_CONTACT = exports.ADD_USERS_CONTACT = packageName + 'ADD_USERS_CONTACT';
	var UPDATE_USER_SESSION = exports.UPDATE_USER_SESSION = packageName + 'UPDATE_USER_SESSION';

	var ADD_CONVERSATION = exports.ADD_CONVERSATION = packageName + 'ADD_CONVERSATION';
	var ADD_CONVERSATIONS = exports.ADD_CONVERSATIONS = packageName + 'ADD_CONVERSATIONS';
	var DELETE_CONVERSATIONS = exports.DELETE_CONVERSATIONS = packageName + 'DELETE_CONVERSATIONS';
	var UPDATE_CONVERSATION_STATUS = exports.UPDATE_CONVERSATION_STATUS = packageName + 'UPDATE_CONVERSATION_STATUS';
	var UPDATE_CONVERSATION_ADMIN = exports.UPDATE_CONVERSATION_ADMIN = packageName + 'UPDATE_CONVERSATION_ADMIN';
	var UPDATE_CONVERSATION_NAME = exports.UPDATE_CONVERSATION_NAME = packageName + 'UPDATE_CONVERSATION_NAME';
	var UPDATE_CONVERSATION_UNREAD_COUNTER = exports.UPDATE_CONVERSATION_UNREAD_COUNTER = packageName + 'UPDATE_CONVERSATION_UNREAD_COUNTER';
	var UPDATE_CONVERSATION_LOADING = exports.UPDATE_CONVERSATION_LOADING = packageName + 'UPDATE_CONVERSATION_LOADING';
	var DELETE_CONVERSATION = exports.DELETE_CONVERSATION = packageName + 'DELETE_CONVERSATION';

	var ADD_MEMBER = exports.ADD_MEMBER = packageName + 'ADD_MEMBER';
	var REMOVE_MEMBER = exports.REMOVE_MEMBER = packageName + 'REMOVE_MEMBER';

	var ADD_MESSAGE = exports.ADD_MESSAGE = packageName + 'ADD_MESSAGE';
	var ADD_MESSAGES = exports.ADD_MESSAGES = packageName + 'ADD_MESSAGES';
	var UPDATE_MESSAGE_STATUS = exports.UPDATE_MESSAGE_STATUS = packageName + 'UPDATE_MESSAGE_STATUS';
	var UPDATE_MESSAGES_STATUS = exports.UPDATE_MESSAGES_STATUS = packageName + 'UPDATE_MESSAGES_STATUS';
	var UPDATE_MESSAGE_DATA = exports.UPDATE_MESSAGE_DATA = packageName + 'UPDATE_MESSAGE_DATA';
	var UPDATE_MESSAGE_DATA_STATUS = exports.UPDATE_MESSAGE_DATA_STATUS = packageName + 'UPDATE_MESSAGE_DATA_STATUS';
	var DELETE_MESSAGE = exports.DELETE_MESSAGE = packageName + 'DELETE_MESSAGE';

	// ----------------- USER ----------------- //

	var addUserSession = exports.addUserSession = function addUserSession(user) {
		return {
			type: ADD_USER_SESSION,
			user: user
		};
	};

	var deleteUserSession = exports.deleteUserSession = function deleteUserSession() {
		return {
			type: DELETE_USER_SESSION
		};
	};

	var addUserContact = exports.addUserContact = function addUserContact(user) {
		return {
			type: ADD_USER_CONTACT,
			user: user
		};
	};

	var addUsersContact = exports.addUsersContact = function addUsersContact(users) {
		return {
			type: ADD_USERS_CONTACT,
			users: users
		};
	};

	var updateUserSession = exports.updateUserSession = function updateUserSession(params) {
		return {
			type: UPDATE_USER_SESSION,
			params: params
		};
	};

	// ------------- CONVERSATION ------------- //

	var addConversations = exports.addConversations = function addConversations(conversations) {
		return {
			type: ADD_CONVERSATIONS,
			conversations: conversations
		};
	};

	var addConversation = exports.addConversation = function addConversation(conversation) {
		return {
			type: ADD_CONVERSATION,
			conversation: conversation
		};
	};

	var updateConversationStatus = exports.updateConversationStatus = function updateConversationStatus(conversation) {
		return {
			type: UPDATE_CONVERSATION_STATUS,
			conversation: conversation
		};
	};

	var updateConversationName = exports.updateConversationName = function updateConversationName(conversation, name) {
		return {
			type: UPDATE_CONVERSATION_NAME,
			conversation: conversation,
			name: name
		};
	};

	var updateConversationAdmin = exports.updateConversationAdmin = function updateConversationAdmin(conversation, admins) {
		return {
			type: UPDATE_CONVERSATION_ADMIN,
			conversation: conversation,
			admin: admins
		};
	};

	var updateConversationUnreadCounter = exports.updateConversationUnreadCounter = function updateConversationUnreadCounter(conversation, unreadCounter) {
		return {
			type: UPDATE_CONVERSATION_UNREAD_COUNTER,
			conversation: conversation,
			unreadCounter: unreadCounter
		};
	};

	var updateConversationLoading = exports.updateConversationLoading = function updateConversationLoading(conversation) {
		return {
			type: UPDATE_CONVERSATION_LOADING,
			conversation: conversation
		};
	};

	var deleteConversations = exports.deleteConversations = function deleteConversations(conversations) {
		return {
			type: DELETE_CONVERSATIONS
		};
	};

	var deleteConversation = exports.deleteConversation = function deleteConversation(conversation) {
		return {
			type: DELETE_CONVERSATION,
			conversation: conversation
		};
	};

	// --------------- MEMBER --------------- //

	var removeMember = exports.removeMember = function removeMember(userId, conversationId) {
		return {
			type: REMOVE_MEMBER,
			userId: userId,
			conversationId: conversationId
		};
	};

	var addMember = exports.addMember = function addMember(userId, conversationId) {
		return {
			type: ADD_MEMBER,
			userId: monkeyId,
			conversationId: conversationId
		};
	};

	// --------------- MESSAGE --------------- //

	var addMessage = exports.addMessage = function addMessage(message, conversationId, unread) {
		return {
			type: ADD_MESSAGE,
			message: message,
			conversationId: conversationId,
			unread: unread
		};
	};

	var addMessages = exports.addMessages = function addMessages(conversation, messages) {
		return {
			type: ADD_MESSAGES,
			conversation: conversation,
			messages: messages
		};
	};

	var updateMessageData = exports.updateMessageData = function updateMessageData(message, conversationId) {
		return {
			type: UPDATE_MESSAGE_DATA,
			message: message,
			conversationId: conversationId
		};
	};

	var updateMessageDataStatus = exports.updateMessageDataStatus = function updateMessageDataStatus(message, conversationId) {
		return {
			type: UPDATE_MESSAGE_DATA_STATUS,
			message: message,
			conversationId: conversationId
		};
	};

	var updateMessageStatus = exports.updateMessageStatus = function updateMessageStatus(message, conversationId) {
		return {
			type: UPDATE_MESSAGE_STATUS,
			message: message,
			conversationId: conversationId
		};
	};

	var updateMessagesStatus = exports.updateMessagesStatus = function updateMessagesStatus(status, conversationId, byLastOpenMe) {
		return {
			type: UPDATE_MESSAGES_STATUS,
			status: status,
			conversationId: conversationId,
			byLastOpenMe: byLastOpenMe
		};
	};

	var deleteMessage = exports.deleteMessage = function deleteMessage(message, conversationId) {
		return {
			type: DELETE_MESSAGE,
			message: message,
			conversationId: conversationId
		};
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _actions = __webpack_require__(4);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var conversations = function conversations() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case _actions.ADD_CONVERSATIONS:
				{
					return _extends({}, state, action.conversations);
				}

			case _actions.DELETE_CONVERSATIONS:
				{
					return {};
				}

			case _actions.ADD_CONVERSATION:
				{
					var conversationId = action.conversation.id;
					return _extends({}, state, _defineProperty({}, conversationId, action.conversation));
				}

			case _actions.DELETE_CONVERSATION:
				{
					var _conversationId = action.conversation.id;
					var newState = _extends({}, state);
					delete newState[_conversationId];
					return newState;
				}

			case _actions.UPDATE_CONVERSATION_STATUS:
				{
					var _conversationId2 = action.conversation.id;
					return _extends({}, state, _defineProperty({}, _conversationId2, conversation(state[_conversationId2], action)));
				}

			case _actions.UPDATE_CONVERSATION_NAME:
				{
					var _conversationId3 = action.conversation.id;
					return _extends({}, state, _defineProperty({}, _conversationId3, conversation(state[_conversationId3], action)));
				}

			case _actions.UPDATE_CONVERSATION_ADMIN:
				{
					var _conversationId4 = action.conversation.id;
					return _extends({}, state, _defineProperty({}, _conversationId4, conversation(state[_conversationId4], action)));
				}

			case _actions.UPDATE_CONVERSATION_UNREAD_COUNTER:
				{
					var _conversationId5 = action.conversation.id;
					return _extends({}, state, _defineProperty({}, _conversationId5, conversation(state[_conversationId5], action)));
				}

			case _actions.UPDATE_CONVERSATION_LOADING:
				{
					var _conversationId6 = action.conversation.id;
					return _extends({}, state, _defineProperty({}, _conversationId6, conversation(state[_conversationId6], action)));
				}

			case _actions.ADD_MEMBER:
				{
					var _conversationId7 = action.conversationId;
					return _extends({}, state, _defineProperty({}, _conversationId7, conversation(state[_conversationId7], action)));
				}

			case _actions.REMOVE_MEMBER:
				{
					var _conversationId8 = action.conversationId;
					return _extends({}, state, _defineProperty({}, _conversationId8, conversation(state[_conversationId8], action)));
				}

			case _actions.ADD_MESSAGE:
				{
					var _conversationId9 = action.conversationId;
					return _extends({}, state, _defineProperty({}, _conversationId9, conversation(state[_conversationId9], action)));
				}

			case _actions.ADD_MESSAGES:
				{
					var _conversationId10 = action.conversation.id;
					return _extends({}, state, _defineProperty({}, _conversationId10, conversation(state[_conversationId10], action)));
				}

			case _actions.UPDATE_MESSAGE_DATA:
				{
					var _conversationId11 = action.conversationId;
					return _extends({}, state, _defineProperty({}, _conversationId11, conversation(state[_conversationId11], action)));
				}

			case _actions.UPDATE_MESSAGE_DATA_STATUS:
				{
					var _conversationId12 = action.conversationId;
					return _extends({}, state, _defineProperty({}, _conversationId12, conversation(state[_conversationId12], action)));
				}

			case _actions.UPDATE_MESSAGE_STATUS:
				{
					var _conversationId13 = action.conversationId;
					return _extends({}, state, _defineProperty({}, _conversationId13, conversation(state[_conversationId13], action)));
				}

			case _actions.UPDATE_MESSAGES_STATUS:
				{
					var _conversationId14 = action.conversationId;
					return _extends({}, state, _defineProperty({}, _conversationId14, conversation(state[_conversationId14], action)));
				}

			case _actions.DELETE_MESSAGE:
				{
					var _conversationId15 = action.conversationId;

					return _extends({}, state, _defineProperty({}, _conversationId15, conversation(state[_conversationId15], action)));
				}

			default:
				return state;
		}
	};

	var conversation = function conversation(state, action) {
		switch (action.type) {
			case _actions.UPDATE_CONVERSATION_STATUS:
				{
					if (typeof action.conversation.description !== 'undefined') {
						return _extends({}, state, {
							description: action.conversation.description
						});
					} else if (!action.conversation.online) {
						if (action.conversation.lastOpenMe) {
							return _extends({}, state, {
								lastOpenMe: action.conversation.lastOpenMe,
								lastOpenApp: action.conversation.lastOpenApp,
								online: action.conversation.online
							});
						}
						return _extends({}, state, {
							lastOpenApp: action.conversation.lastOpenApp,
							online: action.conversation.online
						});
					} else {
						if (action.conversation.lastOpenMe) {
							return _extends({}, state, {
								lastOpenMe: action.conversation.lastOpenMe,
								online: action.conversation.online
							});
						}
						return _extends({}, state, {
							online: action.conversation.online
						});
					}
				}

			case _actions.UPDATE_CONVERSATION_NAME:
				{
					return _extends({}, state, {
						name: action.name
					});
				}

			case _actions.UPDATE_CONVERSATION_ADMIN:
				{
					return _extends({}, state, {
						admin: action.admin
					});
				}

			case _actions.UPDATE_CONVERSATION_UNREAD_COUNTER:
				{
					return _extends({}, state, {
						unreadMessageCounter: action.unreadCounter
					});
				}

			case _actions.UPDATE_CONVERSATION_UNREAD_COUNTER:
				{
					return _extends({}, state, {
						unreadMessageCounter: action.unreadCounter
					});
				}

			case _actions.UPDATE_CONVERSATION_LOADING:
				{
					return _extends({}, state, {
						loading: action.conversation.loading
					});
				}

			case _actions.ADD_MEMBER:
				{
					return _extends({}, state, {
						members: members(state.members, action)
					});
				}

			case _actions.REMOVE_MEMBER:
				{
					return _extends({}, state, {
						members: members(state.members, action)
					});
				}

			case _actions.ADD_MESSAGE:
				{
					var lastMessage;
					if (!state.lastMessage) {
						lastMessage = action.message.id;
					} else if (action.message.datetimeCreation < state.messages[state.lastMessage].datetimeCreation) {
						lastMessage = state.lastMessage;
					} else {
						lastMessage = action.message.id;
					}

					var counter = state.unreadMessageCounter;
					if (action.unread) {
						counter++;
					}
					return _extends({}, state, {
						messages: messages(state.messages, action),
						lastMessage: lastMessage,
						unreadMessageCounter: counter
					});
				}

			case _actions.ADD_MESSAGES:
				{
					return _extends({}, state, {
						messages: messages(state.messages, action),
						loading: action.conversation.loading
					});
				}

			case _actions.UPDATE_MESSAGE_DATA:
				{
					return _extends({}, state, {
						messages: messages(state.messages, action)
					});
				}

			case _actions.UPDATE_MESSAGE_DATA_STATUS:
				{
					return _extends({}, state, {
						messages: messages(state.messages, action)
					});
				}

			case _actions.UPDATE_MESSAGE_STATUS:
				{
					if (state.messages[action.message.oldId]) {
						var _lastMessage = action.message.oldId === state.lastMessage ? action.message.id : state.lastMessage;
						return _extends({}, state, {
							messages: messages(state.messages, action),
							lastMessage: _lastMessage
						});
					} else {
						// to update 'state' only
						return _extends({}, state, {
							messages: messages(state.messages, action)
						});
					}
				}

			case _actions.UPDATE_MESSAGES_STATUS:
				{
					return _extends({}, state, {
						messages: messages(state.messages, action, state.lastOpenMe)
					});
				}

			case _actions.DELETE_MESSAGE:
				{
					if (!state.lastMessage) {
						return state;
					}

					var lastMessageId = null;
					var maxTimestamp = 0;

					if (state.lastMessage == action.message.id) {
						Object.keys(state.messages).forEach(function (mId) {
							if (state.messages[mId].datetimeOrder > maxTimestamp && mId != action.message.id) {
								maxTimestamp = state.messages[mId].datetimeOrder;
								lastMessageId = state.messages[mId].id;
							}
						});
					} else {
						lastMessageId = state.lastMessage;
					}

					return _extends({}, state, {
						lastMessage: lastMessageId,
						messages: messages(state.messages, action)
					});
				}
		}
		return state;
	};

	var members = function members(state, action) {
		switch (action.type) {
			case _actions.ADD_MEMBER:
				{
					var userId = action.userId;
					return [].concat(_toConsumableArray(state), [userId]);
				}

			case _actions.REMOVE_MEMBER:
				{
					var _userId = action.userId;
					var index = state.indexOf(_userId);
					if (index > -1) {
						return [].concat(_toConsumableArray(state.slice(_userId, index)), _toConsumableArray(state.slice(index + 1)));
					}

					return state;
				}
		}
		return state;
	};

	var messages = function messages(state, action, lastOpenMe) {
		switch (action.type) {
			case _actions.ADD_MESSAGE:
				{
					return _extends({}, state, _defineProperty({}, action.message.id, action.message));
				}

			case _actions.ADD_MESSAGES:
				{
					return _extends({}, state, action.messages);
				}

			case _actions.UPDATE_MESSAGE_DATA:
				{
					var messageId = action.message.id;
					return _extends({}, state, _defineProperty({}, messageId, message(state[messageId], action)));
				}

			case _actions.UPDATE_MESSAGE_DATA_STATUS:
				{
					var _messageId = action.message.id;
					return _extends({}, state, _defineProperty({}, _messageId, message(state[_messageId], action)));
				}

			case _actions.UPDATE_MESSAGE_STATUS:
				{
					if (state[action.message.oldId]) {
						// to update 'oldId' and other params
						var _messageId2 = action.message.oldId;
						var newMessageId = action.message.id;
						var newState = _extends({}, state, _defineProperty({}, newMessageId, message(state[_messageId2], action)));
						delete newState[_messageId2];
						return newState;
					} else if (state[action.message.id]) {
						// to update 'state' only
						var _messageId3 = action.message.id;
						return _extends({}, state, _defineProperty({}, _messageId3, message(state[_messageId3], action)));
					} else {
						return state;
					}
				}

			case _actions.UPDATE_MESSAGES_STATUS:
				{
					if (action.byLastOpenMe) {
						return Object.keys(state).map(function (messageId) {
							if (state[messageId].status !== action.status && state[messageId].datetimeCreation < lastOpenMe) {
								return _extends({}, state[messageId], {
									status: action.status
								});
							}
							return state[messageId];
						}).reduce(function (messages, message) {
							return _extends({}, messages, _defineProperty({}, message.id, message));
						}, {});
					} else {
						return Object.keys(state).map(function (messageId) {
							if (state[messageId].status === action.status) {
								return state[messageId];
							}
							return _extends({}, state[messageId], {
								status: action.status
							});
						}).reduce(function (messages, message) {
							return _extends({}, messages, _defineProperty({}, message.id, message));
						}, {});
					}
				}

			case _actions.DELETE_MESSAGE:
				{
					var deleteMessageId = action.message.id;
					var _newState = _extends({}, state);
					delete _newState[deleteMessageId];
					return _newState;
				}
		}
		return state;
	};

	var message = function message(state, action) {
		switch (action.type) {
			case _actions.UPDATE_MESSAGE_DATA:
				{
					return _extends({}, state, {
						data: action.message.data,
						error: action.message.error
					});
				}

			case _actions.UPDATE_MESSAGE_DATA_STATUS:
				{
					return _extends({}, state, {
						isDownloading: action.message.isDownloading
					});
				}

			case _actions.UPDATE_MESSAGE_STATUS:
				{
					return _extends({}, state, {
						id: action.message.id,
						status: action.message.status
					});
				}
		}
		return state;
	};

	exports.default = conversations;

/***/ }
/******/ ])
});
;