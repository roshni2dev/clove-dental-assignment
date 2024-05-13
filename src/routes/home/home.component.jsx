
import BeyondDentistrySection from '../../component/beyond-dentistry-section/beyond-dentistry.component';
import Chat from '../../component/chat/chat.component';
import Header from '../../component/header/header.component';
import SafetyProtocols from '../../component/safety-protocols/safety-protocols.component';
import Treatment from '../../component/treatment/treatment.component';
import Footer from '../footer/footer.component';
import Navigation from '../navigation/navigation.component';
import './home.styles.css';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <Treatment />
            <SafetyProtocols />
            <BeyondDentistrySection />
            <Chat />
            <Footer />
            <div className="chat-icon-container" />
        </div>
    )
}
export default Home;