import { Col } from "reactstrap";
import * as React from "react";
const Colum = (props) => {
    return (
        <Col
            style={{
                borderRadius: "15px",
                margin: "6px",
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
                    marginBottom: '10px'
                }}
            >
                <img
                    style={{
                        alignSelf: "flex-end",
                    }}
                    src={props.img}
                    alt=".."
                ></img>
            </div>
            <div
                style={{
                    wordWrap: "break-word",
                    textAlign: "center",
                    color: "white",
                    margin: "4px",
                    flex: 1,
                }}
            >
                {props.des}
            </div>
        </Col>
    );
};
export default Colum;
