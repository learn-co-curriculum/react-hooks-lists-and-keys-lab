import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ProjectItem from "../components/ProjectItem";
import user from "../data/data";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ProjectItem projects={user.projects} />);
});

test("renders a <ProjectItem> for each project passed in as a prop", () => {
  expect(wrapper.find(ProjectItem)).toHaveLength(user.projects.length);
});

test("gives each <ProjectItem> a key based on the project id", () => {
  const items = wrapper.find(ProjectItem);
  expect(items.at(0).key()).toEqual(user.projects[0].id);
  expect(items.at(1).key()).toEqual(user.projects[1].id);
  expect(items.at(2).key()).toEqual(user.projects[2].id);
});
