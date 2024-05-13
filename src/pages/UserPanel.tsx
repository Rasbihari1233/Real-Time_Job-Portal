import Banner from '../components/UserPanelComponents/Banner/Banner';
import Companies from '../components/UserPanelComponents/Companies/Companies';
import Buyers from '../components/UserPanelComponents/Buyers';
import Clientsay from '../components/UserPanelComponents/Clientsay';
import Network from '../components/UserPanelComponents/Network';
import Newsletter from '../components/UserPanelComponents/Newsletter/Newsletter';
import Provide from '../components/UserPanelComponents/Provide';
import Why from '../components/UserPanelComponents/Why';
import UserLayout from '../layout/UserLayout';

export default function UserPanel() {
  return (
    <UserLayout>
      <main>
        <Banner />
        <Companies />
        <Buyers />
        <Provide />
        <Why />
        <Network />
        <Clientsay />
        <Newsletter />
      </main>
    </UserLayout>
  );
}
