import React, { forwardRef, useImperativeHandle, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, FormLabel, OutlinedInput } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px 0px 15px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    paddingLeft: 10,
  },
  inputTwoLine: {
    marginTop: 5,
    width: "100%",
    paddingLeft: 10,
  },
  gridContainer: {
    width: "100%",
  },
  error: {
    border: "1px solid red !important",
  },
}));

const TextInputWithLabel = forwardRef((props, ref) => {
  const classes = useStyles();
  const [data, setData] = React.useState("");
  const [changedFlag, setChangedFlag] = React.useState(0);
  const handleChange = (event) => {
    setChangedFlag(1);
    setData(event.target.value);
    props.onChange(event.target.value);
  };
  const reset = () => {
    setData("");
  };
  useEffect(() => {
    setChangedFlag(0);
  }, []);

  useImperativeHandle(ref, () => {
    return {
      reset: reset,
      value: !changedFlag && props.prevalue ? props.prevalue : data,
    };
  });

  return (
    <div>
      {props.twoline ? (
        <Grid container className={classes.root}>
          <Grid item className={classes.gridContainer}>
            <FormLabel {...props} error={false}>
              {props.heading}
            </FormLabel>
            <OutlinedInput
              value={!changedFlag && props.prevalue ? props.prevalue : data}
              classes={{ root: classes.inputTwoLine }}
              key={props.key ? props.key : ""}
              className={clsx({
                [classes.error]: props.error,
              })}
              type={props.type}
              style={{
                height: props.height ? props.height : "36",
                width: props.width ? props.width : "",
                backgroundColor: props.backgroundColor
                  ? props.backgroundColor
                  : "",
                color: props.color ? props.color : "",
                border:props.border?props.border : "",
              }}
              placeholder={props.placeholder}
              onChange={handleChange}
              disabled={props.disabled ? props.disabled : false}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container className={classes.root}>
          <Grid item md={6} xs={12}>
            <FormLabel {...props}>{props.heading}</FormLabel>
          </Grid>
          <Grid item md={6} xs={12}>
            <OutlinedInput
              classes={{ root: classes.input }}
              placeholder={props.placeholder}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
});

export default TextInputWithLabel;
