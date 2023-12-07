"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>...loading</p>,
});
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <h1>Hello</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setIsVisible(true);
        }}>
        Show
      </button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}
