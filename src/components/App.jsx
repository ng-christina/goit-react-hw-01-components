import "../index.css"
import {Profile} from './profile/profile';
import { Statistics } from './statistics/statistics';
import { FriendList } from "./friend/friend";
import { TransactionHistory } from './transaction/transaction';

import user from 'info/user.json'
import data from 'info/data.json'
import friends from 'info/friends.json'
import transactions from 'info/transactions.json'

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
{/* <Statistics stats={data} /> */}
<FriendList friends={friends} />

<TransactionHistory items={transactions} />;

   </>
  );
};



