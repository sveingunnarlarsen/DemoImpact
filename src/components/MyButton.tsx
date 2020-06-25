import React from "react";
import { Button } from "@material-ui/core";

import { myFunction } from "../../utils";

interface MyButtonProps {
    buttonText: string;
}

console.log("test");

class MyButton extends React.Component<MyButtonProps> {

    render() {
        return (
            <Button onClick={() => console.log("my button clicked")}>{this.props.buttonText}</Button>
        )
    }
}

export default MyButton;