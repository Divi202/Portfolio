const SkillCard = (props) => {
  return (
    <div className="border flex flex-col px-12 py-6 justify-center items-center rounded-md shrink-0">
      <img className="h-15 w-15" src={props.logo} alt={props.name} />
      <p className="mt-4">{props.name}</p>
    </div>
  );
};

export default SkillCard;
