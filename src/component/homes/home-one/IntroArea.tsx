import Image from "next/image";

import intro_thumb from "@/assets/img/update/normal/intro_1-1.png";

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
}[];

const intro_data: DataType[] = [
   {
      id: 1,
      title: "Who We Are",
      desc: (<>EC0 is a 100% pre-scratched cryotome There are 1 Million units, and 10% of them can be yours (10% - EC0) Utility & security token (applies to all transactions and gives a monthly dividend)</>),
   },
   {
      id: 2,
      title: "Wealth?",
      desc: (<>Users with EC0 token have lower system fees Price growth is gathered by demand from energy & solar technologies. You own a stake in an international corporation. You are part of the community</>),
   },
   {
      id: 3,
      title: "True Defi?",
      desc: (<>The underlying growth attracts investors The whole community is interested in growing the EC0 token price. The company is planning to continue to expand the project.</>),
   },
]

const IntroArea = () => {
   return (
      <div className="pt-130 overflow-hidden bg-black2">
         <div className="container">
            <div className="row">
               <div className="col-xl-6">
                  <div className="section-title mb-45">
                     <h2 className="title style2">Introducing $ECO Token</h2>
                     <p className="sec-text">True wealth in the world of virtual currencies</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-between">
               <div className="col-xl-4">
                  {intro_data.map((item) => (
                     <div key={item.id} className="intro-wrap">
                        <h6 className="intro-wrap-title">{item.title}</h6>
                        <p className="intro-wrap-text">{item.desc}</p>
                     </div>
                  ))}
               </div>
               <div className="col-xl-6">
                  <div className="intro-thumb1 alltuchtopdown">
                     <Image src={intro_thumb} alt="img" />
                  </div>
                  <div className="intro-wrap mt-50">
                     <h6 className="intro-wrap-title">Our Mission & Vission</h6>
                     <p className="intro-wrap-text">EC0 token is a 100% deflationary The total supply of the token will be burned every quarter of the year 
                        (reducing supply increases value of circulating EC0 tokens)</p>
                     <p className="intro-wrap-text mt-40">Ecoharvest manages the build of financeable assets from start-to-finish</p>
                     <p className="intro-wrap-text mt-40">Each step of the interaction — obtaining, improvement, development, funding, tasks, and resource the board — is finished with a pledge to diminish environmental 
                        change and have an ESG effect that will lead us to a superior future.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default IntroArea
