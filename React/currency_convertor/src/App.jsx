import React, { useState } from "react";
import InputBox from "./components/InputBox";
import currencyInfo from "./hooks/currencyInfo";

function App() {
    const [amount , setAmount] = useState(0)
    const [convertedAmount , setconvertedAmount] = useState(0)
    const[from , setFrom] = useState("usd")
    const[to,setTo] = useState("inr")


    const swap = function(){
        setFrom(to)
        setTo(from)
        
        setconvertedAmount(amount)
        setAmount(convertedAmount)
    }


    const currencyArr = currencyInfo(from)
    const countries = Object.keys(currencyArr)

    const convert = function(){
        setconvertedAmount(amount * currencyArr[to])
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundColor : "#333"  ,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={(e) => setAmount(e)}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency = {from}
                                currencyOptions={countries}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                amountDisabled
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency = {to}
                                currencyOptions={countries}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )};

export default App