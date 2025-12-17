"use client";

import { useEffect } from "react";

export default function FollowCursor() {
  useEffect(() => {
    const cursor = document.getElementById("golden-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const speed = 0.25; // lower = smoother

    const move = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      requestAnimationFrame(move);
    };

    const mouseMoveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    move();

    // Grow / Shrink
    const grow = () => {
      cursor.style.width = "60px";
      cursor.style.height = "60px";
      cursor.style.opacity = "0.8";
    };

    const shrink = () => {
      cursor.style.width = "25px";
      cursor.style.height = "25px";
      cursor.style.opacity = "1";
    };

    const interactiveElements = document.querySelectorAll("a, button, h2");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <div
      id="golden-cursor"
      style={{
        position: "fixed",
        width: "25px",
        height: "25px",
        background: "#D4AF37",
        borderRadius: "50%",
        pointerEvents: "none",
        mixBlendMode: "difference",
        transform: "translate3d(-50%, -50%, 0)",
        transition: "width 0.2s ease, height 0.2s ease",
        zIndex: 9999,
      }}
    ></div>
  );
}
