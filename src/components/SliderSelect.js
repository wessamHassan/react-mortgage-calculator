import React from "react";
import SliderSingle from "./SliderSingle";

function SliderSelect(props) {
  const bank_limit = 10000
  return (
    <>
      <SliderSingle
        min={1000}
        max={bank_limit}
        defaultValue={props.data.homeValue}
        value={props.data.homeValue}
        step={100}
        label="Home value"
        unit="$"
        amount={props.data.homeValue}
        onChange={(e,value) => props.setData(
          {
            ...props.data,
            downPayment: value * 0.2,
            loanAmount: value * 0.8,
            homeValue:value
          }
        )}
      />
      <SliderSingle
        min={0}
        max={props.data.homeValue}
        defaultValue={props.data.downPayment}
        value={props.data.downPayment}
        step={100}
        label="Down payment"
        unit="$"
        amount={props.data.downPayment}
        onChange={(e,value) => props.setData(
          {
            ...props.data,
            loanAmount: (props.data.homeValue - value),
            downPayment:value
          }
        )}
      />
      <SliderSingle
        min={0}
        max={props.data.homeValue}
        defaultValue={props.data.loanAmount}
        value={props.data.loanAmount}
        step={100}
        label="Loan amount"
        unit="$"
        amount={props.data.loanAmount}
        onChange={(e,value) => props.setData(
          {
            ...props.data,
            loanAmount:value,
            downPayment: (props.data.homeValue - value),
          }
        )}
      />
       <SliderSingle
        min={2}
        max={18}
        defaultValue={props.data.interestRate}
        value={props.data.interestRate}
        step={1}
        label="Interest Rate"
        unit="%"
        amount={props.data.interestRate}
        onChange={(e,value) => props.setData(
          {
            ...props.data,
            interestRate:value
          }
        )}
      />
    </>
  );
}

export default SliderSelect;
