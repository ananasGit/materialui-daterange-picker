/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import * as React from 'react';
import {
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { combine } from '../utils';
import {theme} from '../theme';


const useStyles = makeStyles(() => ({
  buttonContainer: {
    display: 'flex',
    border: `1px solid ${theme.color.alto}`
  },
  button: {
    height: 40,
    width: 40,
    padding: 0,
    borderRadius: 0,
  },
  buttonText: {
    lineHeight: 1.6,
    fontFamily: theme.font.family.sans
  },
  outlined: {
    border: `1px solid ${theme.color.burningOrange}`,
  },
  filled: {
    '&:hover': {
      backgroundColor: theme.color.burningOrange,
      border: `1px solid ${theme.color.burningOrange}`,
    },
    backgroundColor: theme.color.burningOrange,
    border: `1px solid ${theme.color.burningOrange}`,
  },
  highlighted: {
    backgroundColor: "#FFB999",
  },
  contrast: {
    color: theme.color.white,
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
}

const Day: React.FunctionComponent<DayProps> = ({
  disabled,
  highlighted,
  outlined,
  filled,
  onClick,
  onHover,
  value,
}: DayProps) => {
  const classes = useStyles();

  return (
    <div
      className={combine(
        classes.buttonContainer,
        !disabled && highlighted && classes.highlighted,
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
          color={!disabled ? 'textPrimary' : 'textSecondary'}
          className={combine(
            classes.buttonText,
            !disabled && filled && classes.contrast,
          )}
          variant="body2"
        >
          {value}
        </Typography>
      </IconButton>
    </div>
  );
};

export default Day;
