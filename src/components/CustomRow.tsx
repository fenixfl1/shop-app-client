import { Row, RowProps } from "antd";

const CustomRow: React.FC<RowProps> = ({ ...props }) => {
  return <Row {...props}>{props.children}</Row>;
};

export default CustomRow;
