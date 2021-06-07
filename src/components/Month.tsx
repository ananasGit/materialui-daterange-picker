import * as React from 'react';
import {
  Paper,
  Grid,
  makeStyles,
} from '@material-ui/core';
import {
  getDate,
  isSameMonth,
  isToday,
  format,
  isWithinRange,
} from 'date-fns';
import {
  chunks,
  getDaysInMonth,
  isStartOfRange,
  isEndOfRange,
  inDateRange,
  isRangeSameDay,
} from '../utils';
import Header from './Header';
import Day from './Day';


// eslint-disable-next-line no-unused-vars
import { NavigationAction, DateRange } from '../types';
import { theme } from '../theme';

const WEEK_DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const useStyles = makeStyles(() => ({
  root: {
    width: 320,
  },
  weekDaysContainer: {
    marginTop: 12,
    paddingLeft: 28,
    paddingRight: 28,
  },
  daysContainer: {
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 12,
    marginBottom: 12,
  },
}));

interface MonthProps {
  value: Date;
  marker: symbol;
  dateRange: DateRange;
  minDate: Date;
  maxDate: Date;
  navState: [boolean, boolean];
  setValue: (date: Date) => void;
  helpers: {
    inHoverRange: (day: Date) => boolean;
  };
  handlers: {
    onDayClick: (day: Date) => void;
    onDayHover: (day: Date) => void;
    onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
  };
}

const Month: React.FunctionComponent<MonthProps> = (props: MonthProps) => {
  const classes = useStyles();

  const {
    helpers,
    handlers,
    value: date,
    dateRange,
    marker,
    setValue: setDate,
    minDate,
    maxDate,
  } = props;

  // eslint-disable-next-line react/destructuring-assignment
  const [back, forward] = props.navState;

  return (
    <Paper square elevation={0} className={classes.root}>
      <Grid container>
        <Header
          date={date}
          setDate={setDate}
          nextDisabled={!forward}
          prevDisabled={!back}
          onClickPrevious={() => handlers.onMonthNavigate(marker, NavigationAction.Previous)}
          onClickNext={() => handlers.onMonthNavigate(marker, NavigationAction.Next)}
        />

        <Grid
          item
          container
          direction="row"
          justify="space-between"
          className={classes.weekDaysContainer}
        >
          {WEEK_DAYS.map((day) => (
            <div key={day} style={{
              fontSize: theme.font.size.small, 
              fontWeight: theme.font.weight.semiBold, 
              fontFamily: theme.font.family.sans,
              color: theme.color.dune
            }} >
              {day}
            </div>
          ))}
        </Grid>

        <Grid
          item
          container
          direction="column"
          justify="space-between"
          className={classes.daysContainer}
        >
          {chunks(getDaysInMonth(date), 7).map((week, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid key={idx} container direction="row" justify="center">
              {week.map((day) => {
                const isStart = isStartOfRange(dateRange, day);
                const isEnd = isEndOfRange(dateRange, day);
                const isRangeOneDay = isRangeSameDay(dateRange);
                const highlighted = inDateRange(dateRange, day) || helpers.inHoverRange(day);

                return (
                  <Day
                    key={format(day, 'MM-DD-YYYY')}
                    filled={isStart || isEnd}
                    outlined={isToday(day)}
                    highlighted={highlighted && !isRangeOneDay}
                    disabled={
                      !isSameMonth(date, day)
                      || !isWithinRange(day, minDate, maxDate)
                    }
                    startOfRange={isStart && !isRangeOneDay}
                    endOfRange={isEnd && !isRangeOneDay}
                    onClick={() => handlers.onDayClick(day)}
                    onHover={() => handlers.onDayHover(day)}
                    value={getDate(day)}
                  />
                );
              })}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Month;
