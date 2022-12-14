import { TwoDecimalsNumber } from "../../../utils/2DecimalsNumber";
import { useBalance } from "./useBalance";

export function ProfileIndex() {
    const data = useBalance();
    const balanceToNumber = Number(data.balance);
    const balanceToDecimal = Number(TwoDecimalsNumber(balanceToNumber));

    const decimalToCurrencyMoney = balanceToDecimal.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    return (
        <div className="mx-auto lg:mt-20 text-sm 2xl:text-4xl lg:text-2xl text-center w-9/12">
            <h3 className="text-slate-200">
                Saldo disponível: <br />
                {decimalToCurrencyMoney}
            </h3>

            <h3 className="text-slate-200">
                Sua conta: <br /> {data.accountId}
            </h3>
        </div>
    );
}
