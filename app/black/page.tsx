import React from 'react'

const page = () => {
    const steps = [
        {
          step:"01",
          title:"Access World-Class Raffles",
          description:"Use CapRelic tokens to enter raffles for premium items like supercars, yachts, and more. Your tokens unlock a world of exclusive prizes.",
          stepColor:"white",
          borderColor:"#3F8EF7"
        },
        {
          step:"02",
          title:"Access World-Class Raffles",
          description:"Every time tokens are used for a raffle, they are burned, reducing supply and creating scarcity that benefits all holders over time.",
          stepColor:"#191919",
          borderColor:"#191919"
        },
        {
          step:"03",
          title:"Access World-Class Raffles",
          description:"Stake CapRelic tokens to gain access to exclusive raffles, reduced burn rates, and VIP perks, giving you a long-term edge.",
          stepColor:"#191919",
          borderColor:"#191919"
        },
        
      ]
      return (
        <div className=" h-screen w-screen bg-black text-white p-[10%]" >
         
           <div className="flex flex-col justify-between h-full">
           {
              steps.map((step, index) => (
                <Step key={index} {...step} />
              ))
    
            }
           </div>
    
         
        </div>
        
      );
}

export default page

interface StepProps {
    step: string;
    title: string;
    description: string;
    stepColor: string;
    borderColor: string;
  }
  
  
  const Step = ({ step, title, description, stepColor, borderColor }: StepProps) => {
    return (
      <div className="flex gap-4">
        <h1 style={{ color: stepColor }} className="text-9xl font-bold">{step}</h1>
       
        <div style={{ borderColor: borderColor }} className="border-l flex-grow px-5">
          <h1  className="text-3xl">{title}</h1>
          <p  className="text-xl">{description}</p>
        </div>
      </div>
    );
  };