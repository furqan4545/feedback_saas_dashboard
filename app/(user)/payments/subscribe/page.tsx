import SubscribeBtn from "../subscribe-btn";
import { monthlyPlanId, yearlyPlanId } from "@/lib/payments";

const page = ({
  searchParams,
}: {
  searchParams: {
    plan: string;
  };
}) => {
  const { plan } = searchParams;

  const isLifetime = plan === "yearly";
  const planId = plan === "monthly" ? monthlyPlanId : yearlyPlanId;

  console.log("planId:", planId);

  return (
    <div className="flex border p-4 rounded-md flex-col">
      <h1 className="text-2xl font-bold">Start your subscription now:</h1>
      <div className="w-fit mt-3">
        <SubscribeBtn price={planId} isLifetime={isLifetime} />
      </div>
    </div>
  );
};

export default page;
