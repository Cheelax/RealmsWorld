"use client";

import React from "react";
import { TransferLog } from "@/app/bridge/TransferLog";
import { useTransferLog } from "@/app/providers/TransferLogProvider";
import { useCompleteTransferToL1 } from "@/hooks/useTransferToL1";
//import { evaluate } from "@starkware-industries/commons-js-utils";
import PropTypes from "prop-types";

export const Account = ({ isL1 }: { isL1: boolean }) => {
  const { transfers /*, fetchNextPage, isLoading*/ } = useTransferLog(isL1);
  const completeTransferToL1 = useCompleteTransferToL1();

  const onCompleteTransferClick = (transfer: any) => {
    completeTransferToL1(transfer);
  };
  return (
    <>
      {transfers?.length
        ? transfers.map((transfer: any, index: number) => (
            <TransferLog
              isL1={isL1}
              key={index}
              transfer={transfer}
              onCompleteTransferClick={() => onCompleteTransferClick(transfer)}
            />
          ))
        : null}
    </>
  );
};

Account.propTypes = {
  transferId: PropTypes.string,
};
