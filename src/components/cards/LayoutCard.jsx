import { Card } from "antd";

export function LayoutCards({ children,  title="", extra }) {
    return (
        <Card title={title} extra={extra}>
            {children}
        </Card>
    );
}