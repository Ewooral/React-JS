import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
const ChatFeed = (props) => {

    console.log(props); 
    const {chats, activeChat, userName, messages} = props;
    const chat = chats && chats[activeChat];
    console.log(chat, userName, messages);
    return(
        <div>
            ChatFeed, this is Elijah Boahen
        </div>
    )
}
export default ChatFeed