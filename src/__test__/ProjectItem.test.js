import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectItem from "../components/ProjectItem";

const project = {
  id: 1,
  name: "Reciplease",
  about: "A recipe tracking app",
  technologies: ["Rails", "Bootstrap CSS"],
};

test("each <span> element has a unique key prop", () => {
  let errorSpy = jest.spyOn(global.console, "error");
  render(
    <ProjectItem
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  );

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders a <span> for each technology passed in as a prop", () => {
  render(
    <ProjectItem
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  );
  for (const technology of project.technologies) {
    const span = screen.queryByText(technology);
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  }
});
