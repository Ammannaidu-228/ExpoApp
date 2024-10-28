

// eslint-disable-next-line react/prop-types
const ExampleCarouselImage3 = ({ text }) => (
    <img
      src={'  https://img.freepik.com/free-photo/circuit-board-chip-technology-concept_53876-124237.jpg?t=st=1730105032~exp=1730108632~hmac=603b01376bf89fbad66f7c60ad118e1885b7e1426fb0fc69636a9fc80badf870&w=996'} // Ensure the correct image path is imported
      alt={text}
      className="carousel-container"
      style={{width:'80rem', height:'30rem'}}
    />
  );
  
  export default ExampleCarouselImage3;
  