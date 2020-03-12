import Services from '../components/services';
import "../assets/styles.css";
import data from '../data';

const Home = () => (
  <div className="container-fluid">
    <section className="flex justify-between content-center pt-8 px-6 pb-8 mb-8 bg-blue-900">
      <h2 className="text-2xl leading-tight font-headin text-white">
        Delta Airlines Sky Spa
      </h2>
      <p className="max-w-xl text-white self-center">
        Proper Line Consulting, LLC.
      </p>
    </section>
    <div style={{ marginTop: "40px" }} className="container mx-auto px-4">
      <Services data={data} />
    </div>
  </div>
)

export default Home
