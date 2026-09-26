"use client";

import React, { useEffect, useRef } from "react";

interface MotionWaveCanvasProps {
  className?: string;
  dotColor?: string;
  lineColor?: string;
  glowColor?: string;
  particleDensity?: number;
}

export function MotionWaveCanvas({
  className = "",
  dotColor = "#10b981",
  lineColor = "rgba(16, 185, 129, 0.25)",
  glowColor = "rgba(52, 211, 153, 0.4)",
}: MotionWaveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse coordinates for interactive distortion
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Wave parameters
    // Number of columns (X) and rows (Z depth)
    const cols = 55;
    const rows = 35;
    const colSpacing = 28;
    const rowSpacing = 22;

    let time = 0;

    const render = () => {
      time += 0.016;

      // Smooth mouse movement
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Camera & Perspective settings
      const fov = 340;
      const cameraY = -120;
      const waveOriginY = height * 0.58; // Wave positioned across the lower half
      const waveOriginX = width * 0.5;

      // Store projected 2D coordinates for drawing dots and connecting lines
      const grid2D: {
        x: number;
        y: number;
        scale: number;
        alpha: number;
      }[][] = [];

      for (let r = 0; r < rows; r++) {
        grid2D[r] = [];
        const z = (rows - 1 - r) * rowSpacing + 80; // Z depth (closer rows have smaller z)

        for (let c = 0; c < cols; c++) {
          const x3d = (c - cols / 2) * colSpacing;

          // Undulating fluid wave formula combining multiple harmonics
          const wave1 = Math.sin(c * 0.16 + time * 1.4) * 32;
          const wave2 = Math.cos(r * 0.2 + time * 1.1) * 26;
          const wave3 = Math.sin((c + r) * 0.12 - time * 0.9) * 18;
          const wave4 = Math.sin(c * 0.05 + r * 0.08 + time * 0.6) * 22;

          let y3d = wave1 + wave2 + wave3 + wave4;

          // Mouse ripple effect
          const mouseDist = Math.hypot(
            x3d - (mouse.x - waveOriginX),
            r * rowSpacing - (mouse.y - waveOriginY)
          );
          if (mouseDist < 260) {
            const ripple = Math.sin(mouseDist * 0.04 - time * 3) * 25;
            const factor = Math.max(0, 1 - mouseDist / 260);
            y3d += ripple * factor;
          }

          // Perspective projection
          const scale = fov / (fov + z);
          const screenX = waveOriginX + x3d * scale * 1.35;
          const screenY = waveOriginY + (y3d - cameraY) * scale;

          // Calculate depth-based alpha and color intensity
          const depthRatio = 1 - r / rows; // 1 near, 0 far
          const alpha = Math.max(0.08, Math.min(0.95, depthRatio * 0.9 + 0.1));

          grid2D[r][c] = {
            x: screenX,
            y: screenY,
            scale,
            alpha,
          };
        }
      }

      // Draw connecting lines along columns (depth waves)
      for (let c = 0; c < cols; c += 2) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const p = grid2D[r][c];
          if (r === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 0.55;
        ctx.stroke();
      }

      // Draw connecting cross-lines along rows (lateral waves)
      for (let r = 0; r < rows; r += 2) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const p = grid2D[r][c];
          if (c === 0) {
            ctx.moveTo(p.x, p.y);
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
        const rowAlpha = Math.max(0.05, Math.min(0.4, (1 - r / rows) * 0.45));
        ctx.strokeStyle = `rgba(16, 185, 129, ${rowAlpha})`;
        ctx.lineWidth = 0.45;
        ctx.stroke();
      }

      // Draw particle dots
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = grid2D[r][c];

          // Particle radius scales with depth
          const radius = Math.max(0.7, 2.4 * p.scale);

          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);

          // Dot gradient
          if (p.scale > 0.65) {
            ctx.fillStyle = `rgba(52, 211, 153, ${p.alpha})`;
            ctx.shadowColor = glowColor;
            ctx.shadowBlur = 6;
          } else {
            ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha * 0.75})`;
            ctx.shadowBlur = 0;
          }

          ctx.fill();
        }
      }
      ctx.shadowBlur = 0; // reset shadow for performance

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dotColor, lineColor, glowColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      style={{ opacity: 0.95 }}
    />
  );
}
