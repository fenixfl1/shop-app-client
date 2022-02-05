import { Col, ColProps } from "antd";

const CustomCol: React.FC<ColProps> = ({ ...props }) => (
  <Col {...props}>{props.children}</Col>
);

export default CustomCol;
