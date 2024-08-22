import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import icon_1 from "@/assets/img/update/invest/invest-icon-1.png"
import icon_2 from "@/assets/img/update/invest/invest-icon-2.png"
import icon_3 from "@/assets/img/update/invest/invest-icon-3.png"
import icon_4 from "@/assets/img/update/invest/invest-icon-4.png"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
}

const invest_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Enclose BTC",
   },
   {
      id: 2,
      icon: icon_2,
      title: "Explore SOL",
   },
   {
      id: 3,
      icon: icon_3,
      title: "No Bank No Trouble",
   },
   {
      id: 4,
      icon: icon_4,
      title: "UXC",
   },
];

const InvestArea = () => {
   return (
      <div className="pt-130 overflow-hidden">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-6 col-lg-7">
                  <div className="section-title text-center mb-50">
                     <h2 className="title style2">Invest in Our ecosystem shares today</h2>
                  </div>
               </div>
            </div>
            <div className="row gy-30">
               {invest_data.map((item) => (
                  <div key={item.id} className="col-lg-3 col-md-6">
                     <div className="invest-card">
                        <div className="invest-card-icon">
                           <Image src={item.icon} alt="icon" />
                        </div>
                        <Link className="btn btn3" href="#">{item.title}</Link>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default InvestArea
