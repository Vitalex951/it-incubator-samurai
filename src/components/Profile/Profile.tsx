import React, {useState} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type ProfileTypeProps = {
    posts: Array<PostDataPropsType>

}

export type PostDataPropsType = {
    message: string
    likes: number
}


const Profile = (props: ProfileTypeProps) => {
    const [messages, setMessages] = useState(props.posts)

    const addMessage = (message: string) => {
        setMessages([...messages, {message , likes: 0}])

    }
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={messages} addMessage={addMessage}/>
        </div>
    );
};

export default Profile;