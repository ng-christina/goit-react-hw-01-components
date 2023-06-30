import "../index.css"
import {Profile} from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from "./friend/friend";

import user from 'info/user.json'
import data from 'info/data.json'
import friends from 'info/friends.json'

export const App = () => {
  return (
   <>
   <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

<Statistics title="Upload stats" stats={data} />

<FriendList friends={friends} />
{/* <Statistics stats={data} /> */}
   </>
  );
};



