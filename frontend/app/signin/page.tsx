"use client"
import React from "react";
import axios from "axios";
import { signIn } from "../utils/httpClient";
import { useRouter } from "next/navigation";
import { useUser } from "../components/UserContext";
import { z } from "zod";
export default function SignIn() {
    const router=useRouter()
    const user=useUser()
    const loginHandler=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
       

        const emailSchema = z.string().email({ message: "Invalid email address" });

        // Example usage:
       
        const formData = new FormData(e.currentTarget); // Pass the form element
        const email:string= formData.get('email') as string;
        try{
            if(!emailSchema.parse(email)){
                alert("Enter valid Email!!!")
                return;
            }
        }catch(e){
            alert("Enter valid email")
            return;
        }
        const password = formData.get('password') as string;
        // console.log(email,password)
        const response=await signIn(email,password);
        // console.log(response)
        if(response){
            if(response=="invalid password")
            {
                alert("invalid password")
                return ;
            }
            user?.setuseronsignin();
            router.push('/trade/SOL_USDC')
        }
    }
    return (
        <div className="thin-scroll flex flex-1 flex-col overflow-auto bg-baseBackgroundL0 text-baseTextHighEmphasis mt-40">
            <div className="relative flex flex-1 flex-col">
                <div className="absolute left-1/2 top-1/2 my-auto h-full w-full max-w-[1280px] -translate-x-1/2 -translate-y-1/2">
                    <img
                        alt="Grid"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="opacity-10"
                        src="/grid-background.svg"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent',
                        }}
                    />
                    <img
                        alt="Candlesticks"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="opacity-20"
                        src="/candlestick-chart.svg"
                        style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            inset: 0,
                            color: 'transparent',
                        }}
                    />
                    <div className="flex h-full w-full">
                        <div className="h-full w-1/2 bg-gradient-to-r from-baseBackgroundL0 to-transparent opacity-80"></div>
                        <div className="h-full w-1/2 bg-gradient-to-l from-baseBackgroundL0 to-transparent opacity-80"></div>
                    </div>
                </div>
                <div className="mx-auto flex h-full flex-1 items-center justify-center bg-cover pb-20">
                    <div className="z-10 w-[380px] space-y-6 rounded-xl border border-baseBorderLight bg-baseBackgroundL1 px-6 pb-6 pt-8">
                        <div className="flex flex-col items-center text-center">
                        
                            <h1 className="mt-6 text-2xl font-medium">Sign in</h1>
                        </div>
                        <form onSubmit={loginHandler}>
                            <div className="w-full pb-1.5">
                                <input
                                    className="h-12 w-full rounded-xl border-2 border-solid border-baseBorderLight bg-baseBackgroundL0 px-4 text-neutral-900 text-baseTextHighEmphasis placeholder-baseTextLowEmphasis outline-none ring-0 focus:border-accentBlue focus:ring-0"
                                    name="email"
                                    placeholder="Email"
                                />
                                <div className="h-2"></div>
                            </div>
                            <div className="w-full pb-1.5">
                                <input
                                    className="h-12 w-full rounded-xl border-2 border-solid border-baseBorderLight bg-baseBackgroundL0 px-4 text-neutral-900 text-baseTextHighEmphasis placeholder-baseTextLowEmphasis outline-none ring-0 focus:border-accentBlue focus:ring-0"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                />
                                <div className="h-2"></div>
                            </div>
                            <div className="mt-4 flex justify-between py-1.5">
                                <div className="flex justify-center space-x-1">
                                    <p className="text-sm font-base text-baseTextHighEmphasis">New here?</p>
                                    <a
                                        className="text-sm font-medium text-accentBlue hover:text-baseTextMedEmphasis"
                                        href="/signup"
                                    >
                                        Sign up
                                    </a>
                                </div>
                                
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    aria-label="Login"
                                    className="h-12 w-full rounded-xl bg-buttonPrimaryBackground px-4 py-2 text-center text-base font-semibold text-buttonPrimaryText hover:opacity-90 focus:outline-none focus:ring-blue-200 disabled:opacity-80 disabled:text-base-600"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
