import * as React from "react";
import { Card, CardImg, CardBody, Row } from "reactstrap";
import BackImage from "../../../assets/icons/back_Image.png";
import Locate from "../../../assets/icons/Sites.svg";
import Arrow from "../../../assets/icons/Size.svg";
import Building from "../../../assets/icons/Buildings.svg";
import Building_Location from "../../../assets/icons/MapView.svg";
import Colum from "./img_col";
const ImageCard = ({ data }) => {
    return (
        <Card
            style={{
                borderRadius: "15px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                border: "1px solid white",
                background: "rgba(255,255,255,0.14)",
                zIndex: 4,
            }}
        >
            <CardBody
                style={{
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Row
                    style={{
                        borderRadius: "15px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Colum img={Locate} des={data?.siteName}></Colum>
                    <Colum img={Building} des={data?.buildingName}></Colum>
                    <Colum img={Building_Location} des={data?.buildingLocation}></Colum>
                    <Colum img={Arrow} des={`${data?.area} sp ft`}></Colum>
                </Row>
            </CardBody>
            <CardImg
                src={BackImage}
                alt="..."
                style={{ borderRadius: "15px", width: '48%' }}
            ></CardImg>
        </Card>
    );
};

export default ImageCard;
