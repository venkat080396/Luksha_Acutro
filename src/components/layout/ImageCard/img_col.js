import { Col } from "reactstrap";
import * as React from "react";
import { Typography } from "@mui/material";
const Colum = (props) => {
    return (
        <Col
            style={{
                borderRadius: "1em",
                margin: "0.4em",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
            }}
        >
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    marginBottom: '0.6em'
                }}
            >
                {!props.icon && (
                    <img
                        style={{
                            alignSelf: "flex-end",
                        }}
                        src={props.img}
                        alt=".."
                    ></img>
                )}
                {props.icon && (
                    props.icon
                )}
            </div>
            <div
                style={{
                    wordWrap: "break-word",
                    textAlign: "center",
                    color: "white",
                    margin: "0.25em",
                    flex: 1,
                }}
            >
                <Typography variant="header3">
                    {props.des}
                </Typography>
            </div>
        </Col>
    );
};
export default Colum;
