import {
  TooltipDefinitions,
  tooltipDefinitions,
} from '../services/tooltipDefinitions';

export const getDefinition = (key: TooltipDefinitions) => {
  return (
    tooltipDefinitions.find((definition) => definition.key === key)?.value ?? ''
  );
};
