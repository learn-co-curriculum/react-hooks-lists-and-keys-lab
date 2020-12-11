import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import NavBar from "../components/NavBar";

Enzyme.configure({ adapter: new Adapter() });

test("renders three <a> elements", () => {
  const { container } = render(<NavBar />);
  expect(container.querySelectorAll("a")).toHaveLength(3);
});

test("displays the correct text for each <a> element", () => {
  render(<NavBar />);
  expect(screen.queryByText(/home/i)).toBeInTheDocument();
  expect(screen.queryByText(/about/i)).toBeInTheDocument();
  expect(screen.queryByText(/projects/i)).toBeInTheDocument();
});

test("each <a> element has the correct href attribute", () => {
  render(<NavBar />);
  expect(screen.queryByText(/home/i).href).toEqual("#home");
  expect(screen.queryByText(/about/i).href).toEqual("#about");
  expect(screen.queryByText(/projects/i).href).toEqual("#projects");
});

test("each <a> element has a unique key prop", () => {
  const wrapper = shallow(<NavBar />).find("a");
  expect(wrapper.at(0).key()).toEqual("home");
  expect(wrapper.at(1).key()).toEqual("about");
  expect(wrapper.at(2).key()).toEqual("projects");
});
