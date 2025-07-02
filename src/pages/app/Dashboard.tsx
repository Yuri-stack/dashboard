import { BalanceChart } from "@/components/balanceChart";
import { Summary } from "@/components/summary";

export function Dashboard() {
    return (
        <>
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <Summary />
                {/* <BalanceChart /> */}
            </div>
        </>
    )
}
