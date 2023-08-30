"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { LogOut, Mail } from "lucide-react";
import { useConnectors, useAccount, useNetwork } from "@starknet-react/core";
import { formatBigInt } from "@/app/lib/utils";
import { useWalletsProviderContext } from "@/app/providers/WalletsProvider";
import Starknet from "@/icons/starknet.svg";
import Lords from "@/icons/lords.svg";
import EthereumLogo from "@/icons/ethereum.svg";
import { motion } from "framer-motion";
import { StarknetLoginButton } from "./StarknetLoginButton";

export const StarkLogin = () => {
  const { connect, connectors, disconnect } = useConnectors();
  const { address, status } = useAccount();
  const { balances } = useWalletsProviderContext();
  const { chain } = useNetwork();

  if (status === "connected")
    return (
      <div className=" border rounded p-2 pt-4 border-white/20">
        <div className="flex mb-3 justify-between">
          <div className="flex">
            <Starknet className="w-8 px-1" />
            <div className="self-center"> {chain?.name}</div>
          </div>
          <div>
            <Button
              variant="outline"
              size={"xs"}
              className=""
              onClick={() => disconnect()}
            >
              <LogOut className="self-center w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 align-items-center space-x-3">
          <div className="px-4 pt-4 pb-2 border rounded border-white/20">
            <div className="text-2xl flex">
              <EthereumLogo className="w-4 mr-2" />
              {formatBigInt(balances.l2.eth, 3)}
            </div>
          </div>
          <div className="px-4 pt-4 pb-2 border rounded   flex justify-between border-white/20">
            <div className="text-2xl flex">
              <Lords className="w-6 fill-current pr-2" />
              {balances.l2.lords && balances.l2.lords > 0
                ? formatBigInt(balances.l2.lords, 3)
                : 0}
            </div>
            <Button
              href="/bridge"
              size={"xs"}
              variant={"subtle"}
              className="self-center"
            >
              Bridge
            </Button>
          </div>
        </div>
      </div>
    );
  return (
    <div className="self-center w-full">
      <StarknetLoginButton />
    </div>
  );
};

export default StarkLogin;
