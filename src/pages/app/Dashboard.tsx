import { BalanceChart } from "@/components/balanceChart";
import { Summary } from "@/components/summary";

export function Dashboard() {
    return (
        <>
            <Summary />
            <BalanceChart />

            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
            {/* <OutcomeChart /> */}
            {/* </div> */}
        </>
    )
}
