
import TOPIMAGE from "../assets/TOPIMAGE.webp";

const Topig = () => {
  return (
    <div className="relative w-full h-[475px]">
      <a
        href="https://your-link-here.com"  
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={TOPIMAGE}
          alt="Banner"
          className="w-full h-full object-cover cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Topig;
