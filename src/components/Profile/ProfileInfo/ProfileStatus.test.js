import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile Status Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Hello!!!" />);
        const instance = component.root;
        expect(instance.props.status).toBe("Hello!!!");
    });

    test("after creation <h3> should be contains correct status", () => {
        const component = create(<ProfileStatus status="Hello!!!" />);
        const root = component.root;
        let h3 = root.findByType('h3');
        expect(h3).not.toBeNull();
    });

    test("after creation <h3> should be contains correct status", () => {
        const component = create(<ProfileStatus status="Hello!!!" />);
        const root = component.root;
        let h3 = root.findByType('h3');
        expect(h3.children[0]).toBe('Hello!!!');
    });

    test("input should be displayed in editMode instead of h3", () => {
        const component = create(<ProfileStatus status="Hello!!!" />);
        const root = component.root;
        let h3 = root.findByType('h3');
        h3.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('Hello!!!');
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Hello!!!" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });
});