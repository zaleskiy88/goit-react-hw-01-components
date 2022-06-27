import { Container } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import { TransactionsTable } from 'components/TransactionHistory/TransactionHistory';
import statsData from 'data.json';
import userData from 'user.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        userData={userData}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      ></Profile>
      <Statistics stats={statsData} title="Upload stats"></Statistics>
      <FriendsList friends={friends}></FriendsList>
      <TransactionsTable items={transactions}></TransactionsTable>
    </Container>
  );
};
