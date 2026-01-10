interface SectionHeadingProps {
  headingName: string;
}

const SectionHeading = (props: SectionHeadingProps) => {
  return (
    <h2 className="text-2xl font-bold text-rose-400 text-center">
      {props.headingName}
    </h2>
  );
};

export default SectionHeading;
