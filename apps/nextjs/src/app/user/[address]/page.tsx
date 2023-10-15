import { Metadata } from "next";

import UserTokenGrid from "./UserTokenGrid";

export async function generateMetadata({
  params,
}: {
  params: { address: string };
}): Promise<Metadata> {
  return {
    title: `Atlas - Collections Profile: ${params.address}`,
    description: `Collection Details page for ${params.address} - Created for Adventurers by Bibliotheca DAO`,
  };
}

export default async function Page({
  params,
}: {
  params: { address: string };
}) {
  // // Group tokens by contract
  // const tokensByContract = tokens.reduce<Record<string, UserTokenData[]>>(
  //   (acc, token) => {
  //     const contract = customContractNames[token.token.contract]
  //       ? token.token.contract
  //       : "All";

  //     acc[contract] = acc[contract] || [];
  //     acc[contract].push(token);

  //     return acc;
  //   },
  //   {}
  // );

  // const contractOrder = Object.keys(customContractNames);

  // // Create TabInfo array for TabbedView
  // const tabs = Object.entries(tokensByContract)
  //   .map(([contract, tokens]) => ({
  //     name: customContractNames[contract] || "All",
  //     content: (
  //       <Suspense fallback={<div>Loading...</div>}>
  //         <UserTokenGrid tokens={tokens} />
  //       </Suspense>
  //     ),
  //   }))
  //   .sort((a, b) => {
  //     if (a.name === "All") return 1;
  //     if (b.name === "All") return -1;

  //     const aIndex = contractOrder.indexOf(a.name);
  //     const bIndex = contractOrder.indexOf(b.name);

  //     return aIndex - bIndex;
  //   });

  return <UserTokenGrid address={params.address} continuation="" />;
}