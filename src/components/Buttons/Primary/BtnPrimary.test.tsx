import React from "react";
import { shallow } from "enzyme";

import ButtonPrimary from "./index";

describe("Button Primary Component", () => {
  it("Matches snapshot", () => {
    const btnPrimary = shallow(<ButtonPrimary />);
    expect(btnPrimary).toMatchSnapshot();
  });

  it("Display button text", () => {
    const text = "text";
    const btnPrimary = shallow(<ButtonPrimary>{text}</ButtonPrimary>);
    expect(
      btnPrimary
        .find(".button-primary")
        .at(0)
        .text()
    ).toBe(text);
  });

  it("Display empty button with no children", () => {
    const btnPrimary = shallow(<ButtonPrimary />);
    expect(
      btnPrimary
        .find(".button-primary")
        .at(0)
        .text()
    ).toBe("");
  });

  it("Renders button disabled", () => {
    const action = jest.fn();
    const btnPrimary = shallow(
      <ButtonPrimary disabled={true} action={action} />
    );

    const btn = btnPrimary.find(".button-primary").at(0);
    btn.simulate("click");
    expect(btn.prop("disable")).toBeTruthy();
    expect(action).toBeCalledTimes(0);
  });

  it("Action is colled when clicked", () => {
    const action = jest.fn();
    const btnPrimary = shallow(<ButtonPrimary action={action} />);

    btnPrimary
      .find(".button-primary")
      .at(0)
      .simulate("click");

    expect(action).toBeCalledTimes(1);
  });
});
