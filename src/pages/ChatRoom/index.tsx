import React, { useState } from 'react';
import "react-chat-elements/dist/main.css";
import { ChatList, MessageList, Navbar, Input, Button } from "react-chat-elements";
import {isMobile} from 'react-device-detect';
import './style.css';

export function  ChatRoom() {

  const [mobileChatDrawer, setMobileChatDrawer] = useState(false);

  const handleMobileChatList = () => {
    setMobileChatDrawer(!mobileChatDrawer);
  }

  if(!isMobile) {
    return (
      <>
        <Navbar
          left={(<div>Chef-GPT</div>)}
          type="light"
        />
        <div className="flex-row">
          <div className="left">
            <ChatList
              className='chat-list'
              lazyLoadingImage=''
              id='chat-list'
              dataSource={[
                {
                  id: 1,
                  avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                  alt: 'kursat_avatar',
                  title: 'Kursat',
                  subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                  date: new Date(),
                  unread: 3,
                },
                {
                  id: 1,
                  avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                  alt: 'kursat_avatar',
                  title: 'Kursat',
                  subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                  date: new Date(),
                  unread: 3,
                }
            ]} />
          </div>
          <div className="chat-room">
            <div className="flex-row">
              <MessageList
                className='message-list'
                lockable={true}
                toBottomHeight={'100%'}
                referance={null}
                dataSource={[
                  {
                    id: 1,
                    position:"left",
                    type:"text",
                    title:"Kursat",
                    text:"Give me a message list example !",
                    focus: false,
                    date: new Date(),
                    titleColor: 'black',
                    forwarded: false,
                    replyButton: false,
                    removeButton: false,
                    status: 'sent',
                    notch: false,
                    retracted: false,
                  },
                  {
                    id: 2,
                    position:"right",
                    type:"text",
                    title:"Emre",
                    text:"That's all.",
                    focus: false,
                    date: new Date(),
                    titleColor: 'black',
                    forwarded: false,
                    replyButton: false,
                    removeButton: false,
                    status: 'sent',
                    notch: false,
                    retracted: false,
                  },
                ]}
              />
            </div>
            <div className="flex-row">
              <div className="input-area">
                <Input
                  placeholder="Type here..."
                  multiline={true}
                  maxHeight={100}
                />
                <Button text={"Send"} onClick={() => alert("Sending...")} title="Send" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {
        mobileChatDrawer && <ChatList
        className='chat-list'
        lazyLoadingImage=''
        id='chat-list'
        dataSource={[
          {
            id: 1,
            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
            alt: 'kursat_avatar',
            title: 'Kursat',
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          },
          {
            id: 1,
            avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
            alt: 'kursat_avatar',
            title: 'Kursat',
            subtitle: "Why don't we go to the No Way Home movie this weekend ?",
            date: new Date(),
            unread: 3,
          }
      ]} />
      }
      
      <Navbar
        center={(<div>Chef-GPT</div>)}
        right={<div onClick={() => handleMobileChatList()}>漢堡</div>}
        type="light"
      />
    </>
  );
	
}
