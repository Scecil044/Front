const CustomButton = ({ title, containerStyles, type, onClick, iconRight }) => {
  return (
    <button
      title={title}
      type={type || "button"}
      className={`inline-flex ${containerStyles}`}
      onClick={onClick}
    >
      {title}
      {iconRight && <div className="ml-2">{iconRight}</div>}
    </button>
  );
};

export default CustomButton;
