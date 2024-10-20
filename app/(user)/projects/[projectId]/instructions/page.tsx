import InstructionsClient from "./instructionClient";

const Instructions = async ({
  params,
  searchParams,
}: {
  params: {
    projectId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const widgetType = searchParams.widgetType as string;

  return <InstructionsClient params={params} widgetType={widgetType} />;
};

export default Instructions;
