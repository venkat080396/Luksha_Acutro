import * as React from "react";
import { Card, CardImg, CardBody, Row } from "reactstrap";
import BackImage from "../../../assets/icons/back_Image.jpg";
import Locate from "../../../assets/icons/Sites.svg";
import Arrow from "../../../assets/icons/Size.svg";
import { ReactComponent as BuildingsIcon } from "../../../assets/icons/Buildings.svg"
import Building_Location from "../../../assets/icons/MapView.svg";
import Colum from "./img_col";
import _ from "lodash";

const ImageCard = ({ data }) => {

    return (
        <Card
            style={{
                borderRadius: "1em",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                border: "0.06em solid white",
                background: "#5e6b87",
                zIndex: 4,
                marginBottom: "0.8em"
            }}
        >
            <CardBody
                style={{
                    borderRadius: "1em",
                    display: "flex",
                    justifyContent: "space-around",
                    flex: 1
                }}
            >
                {!_.isEmpty(data) && (
                    <Row
                        style={{
                            borderRadius: "1em",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flex: 1
                        }}
                    >
                        <Colum img={Locate} des={data?.SiteName}></Colum>
                        <Colum icon={<BuildingsIcon height="2.5em" width="2.5em" />} des={data?.Name}></Colum>
                        <Colum img={Building_Location} des={data?.Name}></Colum>
                        <Colum img={Arrow} des={`${data?.SquareMeters} sp ft`}></Colum>
                    </Row>
                )}
            </CardBody>
            <CardImg
                src={BackImage}
                alt="..."
                style={{ borderRadius: "1em", width: '44%' }}
            ></CardImg>
        </Card>
    );
};

export default ImageCard;
