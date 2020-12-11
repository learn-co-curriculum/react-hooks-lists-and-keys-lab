import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ProjectItem from "../components/ProjectItem";
import user from "../data/data";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
const { name, about, technologies } = user.projects[1];

beforeEach(() => {
  wrapper = shallow(
    <ProjectItem name={name} about={about} technologies={technologies} />
  );
});

test("renders a <span> for each technology passed in as a prop", () => {
  expect(wrapper.find("span")).toHaveLength(technologies.length);
});

test("gives each <span> a key based on the technology name", () => {
  const items = wrapper.find("span");
  expect(items.at(0).key()).toEqual(technologies[0]);
  expect(items.at(1).key()).toEqual(technologies[1]);
  expect(items.at(2).key()).toEqual(technologies[2]);
});
