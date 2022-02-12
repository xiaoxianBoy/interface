import React from 'react';
import { ModalType, useModalContext } from 'src/hooks/useModal';
import { BasicModal } from '../primitives/BasicModal';
import { StakeModalContent } from './StakeModalContent';

export const StakeModal = () => {
  const { type, close, args } = useModalContext();
  return (
    <BasicModal open={type === ModalType.Stake} setOpen={close}>
      {args?.icon && (
        <StakeModalContent
          icon={args.icon}
          stakeAsset={args.stakeAsset}
          stakeAssetName={args.stakeAssetName}
          handleClose={close}
        />
      )}
    </BasicModal>
  );
};
