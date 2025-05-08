const CloseIcon = ({ onClick }: { onClick: () => void }) => {
  return (
    <span onClick={onClick} className="size-10 cursor-pointer">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g id="Menu / Close_MD">
            {" "}
            <path
              id="Vector"
              d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
              stroke="#000000"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </g>{" "}
        </g>
      </svg>
    </span>
  );
};

export default CloseIcon;
