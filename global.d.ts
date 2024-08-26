// global.d.ts
interface Window {
    Telegram: {
      WebApp: {
        initDataUnsafe?: {
          user?: {
            id?: string;
            [key: string]: any; // Add other properties if needed
          };
        };
        [key: string]: any; // Add other properties if needed
      };
    };
  }
  
  