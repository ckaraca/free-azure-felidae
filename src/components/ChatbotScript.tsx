"use client";

import { useEffect } from "react";

export function ChatbotScript() {
  useEffect(() => {
    // Initialize config
    window.pluggrConfig = {
      botId: "07913c06-dd8a-4faf-8a5d-f9e55f6150cd",
      position: "bottom-right",
      theme: "light"
    };

    // Load the widget script asynchronously
    const loadScript = (d: Document, s: string, id: string) => {
      if (d.getElementById(id)) return;
      const js = d.createElement(s);
      js.id = id;
      js.async = true;
      js.src = "https://app.plugged.in/bot.js";
      d.getElementsByTagName("head")[0]?.appendChild(js);
    };

    loadScript(document, "script", "pluggr-widget");
  }, []);

  return null;
} 