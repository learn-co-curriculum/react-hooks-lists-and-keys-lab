import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ProjectItem from "../components/ProjectItem";
import ProjectList from "../components/ProjectList";
import { projects } from "../data/user";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ProjectList projects={projects} />);
});

test("renders a <ProjectItem> for each project passed in as a prop", () => {
  expect(wrapper.find(ProjectItem)).toHaveLength(projects.length);
});

test("gives each <ProjectItem> a key based on the project id", () => {
  const items = wrapper.find(ProjectItem);
  expect(items.at(0).key()).toBe(projects[0].id.toString());
  expect(items.at(1).key()).toBe(projects[1].id.toString());
  expect(items.at(2).key()).toBe(projects[2].id.toString());
});
