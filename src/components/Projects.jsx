import { Tabs } from "antd";
import KanbanBoard from "./KanbanBoard";
import Tasks from "./Tasks";
import Activity from "./Activity";
import CalendarBoard from "./CalendarBoard";

const Projects = () => {
  return (
    <Tabs
      onChange={onChange}
      type="card"
      items={itemsTab.map((item, i) => {
        const id = String(i + 1);
        return {
          label: item.label,
          key: id,
          children: item.children,
        };
      })}
    />
  );
};

export default Projects;
