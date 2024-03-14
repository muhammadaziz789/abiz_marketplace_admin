import { DarkThemeConstants, LightThemeContants } from "../../constants/colors";
import { memo, useCallback, useEffect } from "react";

interface ChangeThemsProps {
  mode: string;
}

export const ChangeThems: React.FC<ChangeThemsProps> = memo(({ mode }) => {
  const changeTheme = useCallback((mode: string) => {
    let obj: any = LightThemeContants;
    if (mode === "dark") {
      obj = DarkThemeConstants;
    }
    
    Object.keys(obj).forEach((key: string) => {
      document.documentElement.style.setProperty("--" + key, obj[key]);
    });
  }, []);

  useEffect(() => {
    changeTheme(mode);
  }, [mode, changeTheme]);

  return null;
});
