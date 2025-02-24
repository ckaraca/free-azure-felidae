interface PluggrConfig {
  botId: string;
  position: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  theme: "light" | "dark";
}

declare global {
  interface Window {
    pluggrConfig: PluggrConfig;
  }
}

export {}; 