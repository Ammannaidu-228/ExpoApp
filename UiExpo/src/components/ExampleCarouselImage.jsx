

// eslint-disable-next-line react/prop-types
const ExampleCarouselImage = ({ text }) => (
    <img
      src={'https://img.freepik.com/premium-photo/digital-technology-banner-green-blue-background-concept-with-technology-light-effect-abstract-tech-innovation-future-data-internet-network-ai-big-data-lines-dots-connection-illustration-vector_974729-153178.jpg?w=900'} // Ensure the correct image path is imported
      alt={text}
      style={{width:'80rem', height:'30rem'}}
    />
  );
  
  export default ExampleCarouselImage;
  