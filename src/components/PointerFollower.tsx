import { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";

const PointerFollower = () => {
  const follower = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 280, damping: 28, mass: 0.5 });
  const y = useSpring(0, { stiffness: 280, damping: 28, mass: 0.5 });

  useEffect(() => {
    const element = follower.current;
    const media = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    const hide = () => {
      element.dataset.visible = "false";
      element.dataset.interactive = "false";
      element.dataset.pressed = "false";
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") {
        hide();
        return;
      }

      if (element.dataset.visible !== "true") {
        x.jump(event.clientX);
        y.jump(event.clientY);
      } else {
        x.set(event.clientX);
        y.set(event.clientY);
      }

      const target = event.target instanceof Element
        ? event.target.closest("a[href], button, [role='button'], [role='link'], input, textarea, select, summary")
        : null;
      element.dataset.interactive = String(Boolean(target && !target.matches(":disabled, [aria-disabled='true']")));
      element.dataset.visible = "true";
    };
    const press = (event: PointerEvent) => {
      if (media.matches && event.pointerType === "mouse") element.dataset.pressed = "true";
    };
    const release = () => { element.dataset.pressed = "false"; };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", press, { passive: true });
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", hide);
    document.documentElement.addEventListener("pointerleave", hide);
    media.addEventListener("change", hide);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", hide);
      document.documentElement.removeEventListener("pointerleave", hide);
      media.removeEventListener("change", hide);
    };
  }, [x, y]);

  return (
    <motion.div ref={follower} className="pointer-follower" aria-hidden="true" data-visible="false" data-interactive="false" data-pressed="false" style={{ x, y }}>
      <span className="pointer-follower-ring" />
      <span className="pointer-follower-dot" />
    </motion.div>
  );
};

export default PointerFollower;
