import { IconButton, useColorModeValue } from '@chakra-ui/core';
import useColorMode from '@/utils/color-mode';
import { Sun, Moon } from './icons';
import {useEffect} from "react";

export default function ThemeToggle(props) {
  const { toggleColorMode, newColorMode } = useColorMode();
  const Icon = useColorModeValue(
    <Moon h={5} color="gray.600" />,
    <Sun h={5} />
  );

  return (
    <IconButton
      data-testid="theme-toggle"
      variant="ghost"
      aria-label={`Toggle ${newColorMode} mode`}
      title={`Activated ${newColorMode} mode`}
      icon={Icon}
      onClick={toggleColorMode}
      {...props}
    />
  );
}
