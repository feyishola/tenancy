import Mapcomponent from '../components/mapcomponent';

const MapPage = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-[40%]">Cards</div>
      <div className="w-full md:w-[60%]">
        <Mapcomponent location='Kaduna State University, Kaduna State, Nigeria' />
      </div>
    </div>
  );
};

export default MapPage;
