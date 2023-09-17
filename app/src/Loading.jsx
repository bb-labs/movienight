import './Loading.css'; // Import the CSS file for styling

const LoadingSkeleton = () => {
  return (
    <div className="loading-skeleton-container">
      <div className="loading-skeleton">
        <div className="loading-skeleton-line"></div>
        <div className="loading-skeleton-line"></div>
        <div className="loading-skeleton-line"></div>
        <div className="loading-skeleton-line"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
