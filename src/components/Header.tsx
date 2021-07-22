import { Grid, IconButton, makeStyles } from "@material-ui/core";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import React from "react";

import { useDateRangeContext } from "../context";
import { theme } from "../theme";
import { combine } from "../utils";

const useStyles = makeStyles(() => ({
  iconContainer: {
    padding: 5,
  },
  flexSpace: {
    flexGrow: 1,
  },
  paddingLeft: {
    paddingLeft: 12,
  },
  monthHeader: {
    fontFamily: theme.font.family.sans,
    fontWeight: theme.font.weight.bold,
    fontSize: theme.font.size.slarge,
    color: theme.color.dune,
  },
  icon: {
    padding: 10,
    "&:hover": {
      background: "none",
    },
  },
  header: {
    fontFamily: theme.font.family.sans,
  },
}));

interface HeaderProps {
  date: Date;
  setDate: (date: Date) => void;
  nextDisabled: boolean;
  prevDisabled: boolean;
  onClickNext: () => void;
  onClickPrevious: () => void;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  date,
  nextDisabled,
  prevDisabled,
  onClickNext,
  onClickPrevious,
}: HeaderProps) => {
  const classes = useStyles();

  const { getMonth, getYear } = useDateRangeContext();

  return (
    <Grid container justify="space-between" alignItems="center">
      {prevDisabled || (
        <Grid item className={classes.iconContainer}>
          <IconButton className={classes.icon} onClick={onClickPrevious}>
            <ChevronLeft color={prevDisabled ? "disabled" : "action"} />
          </IconButton>
        </Grid>
      )}

      <Grid item className={combine(classes.flexSpace, prevDisabled ? classes.paddingLeft : "")}>
        <span className={classes.monthHeader}>{`${getMonth(date)} ${getYear(date)}`}</span>
      </Grid>

      {nextDisabled || (
        <Grid item className={classes.iconContainer}>
          <IconButton className={classes.icon} onClick={onClickNext}>
            <ChevronRight color={nextDisabled ? "disabled" : "action"} />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
