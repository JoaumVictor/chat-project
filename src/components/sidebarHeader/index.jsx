import React from 'react';
import * as C from './style';
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from 'email-validator';
import { auth, db } from '../../services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from "react-firebase-hooks/firestore";

const SidebarHeader = ({ setUserChat }) => {
  const [user] = useAuthState(auth);

  const refChat = db
  .collection("chats")
  .where("users", "array-contains", user.email);

  const [chatsSnapchot] = useCollection(refChat);

  const handleCreateChat = () => {
    const emailInput = prompt("informe o email desejado");

    if(!emailInput) return;

    if(!EmailValidator.validate(emailInput)) {
      return alert("Email Inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um email diferente do seu!");
    } else if (chatExists(emailInput)) {
      return alert("Esse chat já existe!")
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailChat) => {
    return !!chatsSnapchot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
      );
  };

  return (
    <C.Container>
      <C.Avatar
        src={ user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />
      <C.Options>
        <MdDonutLarge />
        <MdChat onClick={ handleCreateChat } />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  )
}

export default SidebarHeader;
