
import Header from './components/Header/header';
import Main from './components/main/main';
import About from './components/about/about.jsx';

import './components/Style/app.scss'
import Uslugi from './components/uslugi/uslugi.jsx';
import Project from './components/Project/project.jsx';
import Reviwes from './components/reviews/reviews.jsx';
import Blog from './components/blog/blog.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/footer/footer.jsx';

function App() {

  return (

    <>
    
    <Header />
    <Main />
    <About />
    <Uslugi />
    <Project />
    <Reviwes />
    <Blog />
    <Contact />
    <Footer />

    </>

  );
}

export default App;
