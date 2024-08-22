interface DataType {
   id: number;
   sub_title: string;
   title: string;
   desc: string;
}[];

const road_map_data: DataType[] = [
   {
      id: 1,
      sub_title: "End of Q2 2024",
      title: "Research",
      desc: "We are committed to delivering a world class token for our community members and investors.",
   },
   {
      id: 2,
      sub_title: "Start of Q3 2024",
      title: "Token Beta Test",
      desc: "SDK implementations, stress testing and security tests will be carries out by top auditing firms in the space.",
   },
   {
      id: 3,
      sub_title: "End of Q3 2024",
      title: "Token Live On Raydium",
      desc: "$EC0 token will be deployed to the Solana network with liquidity added to Raydium and Jupiter pools.",
   },
   {
      id: 4,
      sub_title: "Start of Q4 2024",
      title: "Burn",
      desc: "We will implement the first burn mechanism.",
   },
   {
      id: 5,
      sub_title: "End of Q4 2024",
      title: "Airdrop",
      desc: "Members with any number of $EC0 token will be airdropped depending on the ammount in their wallet.",
   },
];

export default road_map_data;