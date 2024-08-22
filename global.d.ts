interface Window {
    solana?: {
      isPhantom: boolean;
      connect: () => Promise<{ publicKey: PublicKey }>;
      signTransaction: (transaction: Transaction) => Promise<Transaction>;
      publicKey: PublicKey;
    };
  }