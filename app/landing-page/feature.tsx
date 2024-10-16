const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="p-4 sm:p-5 border rounded-lg shadow-md">
    <h4 className="mb-2 font-semibold text-lg">{title}</h4>
    <p className="text-sm sm:text-base">{description}</p>
  </div>
);

export default Feature;
