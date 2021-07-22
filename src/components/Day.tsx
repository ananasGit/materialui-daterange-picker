import { IconButton, makeStyles, Typography } from "@material-ui/core";
import * as React from "react";

import { theme } from "../theme";
import { combine } from "../utils";

const useStyles = makeStyles(() => ({
  buttonContainer: {
    display: "flex",
    border: `1px solid ${theme.color.alto}`,
    outline: `1px solid ${theme.color.alto}`,
  },
  button: {
    height: 40,
    width: 40,
    padding: 0,
    borderRadius: 0,
  },
  buttonText: {
    lineHeight: 1.6,
    fontFamily: theme.font.family.sans,
    fontSize: theme.font.size.xs,
  },
  outlined: {
    border: `1px solid ${theme.color.white}`,
    outline: `1px solid ${theme.color.burningOrange}`,
  },
  filled: {
    "&:hover": {
      backgroundColor: theme.color.burningOrange,
      border: `1px solid ${theme.color.burningOrange}`,
    },
    backgroundColor: theme.color.burningOrange,
    border: `1px solid ${theme.color.burningOrange}`,
    outline: `1px solid ${theme.color.burningOrange}`,
  },
  highlighted: {
    backgroundColor: "#FFB999",
    border: `1px solid "#FFB999"`,
  },
  contrast: {
    color: theme.color.white,
  },
  hidden: {
    visibility: "hidden",
  },
  disabled: {
    backgroundColor: theme.color.wildSand,
    color: theme.color.gray,
  },
}));

interface DayProps {
  filled?: boolean;
  outlined?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  startOfRange?: boolean;
  endOfRange?: boolean;
  onClick?: () => void;
  onHover?: () => void;
  value: number | string;
  hidden?: boolean;
}

const Day: React.FunctionComponent<DayProps> = ({
  disabled,
  highlighted,
  outlined,
  filled,
  onClick,
  onHover,
  value,
  hidden,
}: DayProps) => {
  const classes = useStyles();

  return (
    <div
      className={combine(
        classes.buttonContainer,
        !disabled && highlighted && classes.highlighted,
        hidden && classes.hidden,
        disabled && classes.disabled,
      )}
    >
      <IconButton
        className={combine(
          classes.button,
          !disabled && outlined && classes.outlined,
          !disabled && filled && classes.filled,
        )}
        disabled={disabled}
        onClick={onClick}
        onMouseOver={onHover}
      >
        <Typography
          color={!disabled ? "textPrimary" : "textSecondary"}
          className={combine(classes.buttonText, !disabled && filled && classes.contrast)}
          variant="body2"
        >
          {value}
        </Typography>
      </IconButton>
    </div>
  );
};

export default Day;
