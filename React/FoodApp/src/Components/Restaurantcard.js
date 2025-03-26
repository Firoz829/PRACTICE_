import { CDN_URL } from "../utils/constants";

const StyleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  console.log(props);

  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div
      className="res-card w-[200px] rounded-[10px] p-2 m-2.5 no-underline bg-[#f0f0f0] shadow-[0px_0px_20px_2px_rgba(43,42,42,0.087)] hover:shadow-[0px_0px_20px_2px_rgba(43, 42, 42, 0.267)] hover:cursor-pointer hover:-scale-[1.02] hover:transition-all hover:ease-linear hover:duration-[0.85ms] hover:bg-[#D3D3D3]"
      style={StyleCard}
    >
      <img
        style={{ width: "100%", height: "140px" }}
        alt="food-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h2 className="text-[15px] mb-2.5 no-underline">{name}</h2>
      <h4 className="my-1 text-[12px] text-[rgb(44, 41, 41)]">
        {cuisines.join(", ")}
      </h4>
      <h4 className="my-1 text-[12px] text-[rgb(44, 41, 41)]">
        <span className="text-white py-[2px] px-[5px] rounded-[5px] bg-green-600 ">
          {" "}
          {avgRating} ★
        </span>{" "}
        Ratings
      </h4>
      <h4 className="my-1 text-[12px] text-[rgb(44, 41, 41)]">{costForTwo}</h4>
      <h4 className="my-1 text-[12px] text-[rgb(44, 41, 41)]">
        {resData.info.sla.deliveryTime} minutes
      </h4>
    </div>
  );
};

export default RestaurantCard;
