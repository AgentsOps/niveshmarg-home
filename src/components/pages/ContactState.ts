"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CONTACT_FAQ as FAQ } from "@/lib/content";

const ROLES = ["Individual trader", "Fund or desk", "Developer"];
const MARKETS = ["NSE equity", "F&O", "BSE", "Crypto perpetuals"];
const ACC = "var(--acc,#4f46e5)";

export function useContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [role, setRole] = useState(ROLES[0]);
  const [markets, setMarkets] = useState<string[]>(["NSE equity"]);
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(0);

  return {
    sent,
    notSent: !sent,
    name,
    email,
    msg,
    firstName: name.trim().split(/\s+/)[0] || "there",
    onName: (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    onEmail: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    onMsg: (e: ChangeEvent<HTMLTextAreaElement>) => setMsg(e.target.value),
    // The prototype has no backend; the request is only acknowledged on screen.
    submit: (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSent(true);
    },
    reset: () => {
      setSent(false);
      setName("");
      setEmail("");
      setMsg("");
    },
    roles: ROLES.map((label) => {
      const on = role === label;
      return {
        label,
        bg: on ? "#fff" : "transparent",
        fg: on ? "#16153b" : "#5d5c7a",
        sh: on ? "0 6px 16px -8px rgba(22,21,59,.35)" : "none",
        pick: () => setRole(label),
      };
    }),
    markets: MARKETS.map((label) => {
      const on = markets.includes(label);
      return {
        label,
        bg: on ? ACC : "#fff",
        fg: on ? "#fff" : "#3d3c5c",
        bd: on ? "transparent" : "rgba(22,21,59,.14)",
        toggle: () => setMarkets((m) => (m.includes(label) ? m.filter((x) => x !== label) : m.concat(label))),
      };
    }),
    faqs: FAQ.map(([q, a], i) => {
      const isOpen = open === i;
      return {
        q,
        a,
        open: isOpen,
        icon: isOpen ? "−" : "+",
        iconBg: isOpen ? ACC : "rgba(22,21,59,.06)",
        iconFg: isOpen ? "#fff" : "#16153b",
        toggle: () => setOpen(isOpen ? -1 : i),
      };
    }),
  };
}
