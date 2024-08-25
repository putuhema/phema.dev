"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css"
import { cn } from "@/lib/utils";
import StickerContainer from "@/components/sticker-container";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      router.push("/gang");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="relative">
        <StickerContainer />
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <input
            className={cn("border border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-lg p-2 bg-black text-gray-1")}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button type="submit"
            className={cn(
              "mr-auto w-full rounded-full bg-[#a1024d] hover:bg-[#a1024d]/90 transition hover:scale-105 hover:-rotate-3 px-3 py-1.5 flex gap-x-1.5 items-center justify-center text-gray-1 font-semibold  h-fit z-50",
              styles.homeBtn
            )}
          >Login</button>
        </form>
      </div>

    </div>
  );
}