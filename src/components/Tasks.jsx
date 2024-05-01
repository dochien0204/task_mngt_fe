import { Button, Checkbox, Divider, Tag, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Tasks = () => {
  return (
    <div className="task-wrapper">
      <div className="task-wrapper__list">
        {items.map((item) => (
          <div
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
            key={item.id}
          >
            <div className="task-wrapper__list-items">
              {item.elements.map((ele) => (
                <div className="task-wrapper__list-item" key={ele.key}>
                  <Checkbox />
                  <div className="description">
                    <p>{ele.description}</p>
                    <Tag color="orange">{ele.type}</Tag>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="task-wrapper__detail">
        <div className="task-wrapper__detail-top">
          <div className="title">
            <div style={{ fontSize: 32, fontWeight: "bold" }}>
              Find top 5 customer requests
            </div>
            <div>Added by kristin A. yesterday at 12:41pm</div>
          </div>
          <div className="description">
            <div>
              <div style={{ fontSize: 16, fontWeight: "bold" }}>ASIGN TO</div>
              <div style={{ fontSize: 14 }}>Linzell Bowman</div>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: "bold" }}>DUE ON</div>
              <div style={{ fontSize: 14 }}>Tue, Dec 25</div>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: "bold" }}>TAG</div>
              <Tag color="purple">DEVELOPMENT</Tag>
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: "bold" }}>ASIGN TO</div>
              <div style={{ fontSize: 14 }}>Linzell Bowman</div>
            </div>
          </div>
          <Divider />
        </div>
        <div className="task-wrapper__detail-middle">
          <div className="title">DESCRIPTION</div>
          <div className="content">
            Task Descriptions are used during project execution and project
            control. During project planning the task descriptions are used for
            scope planning and creating estimates. During project execution the
            task description is used by those doing the activities to ensure
            they are doing the work correctly
          </div>
          <div className="file">
            <div className="file-wrapper">
              <div className="icon"></div>
              <div>
                <div>Header.png</div>
                <div>155 KB</div>
              </div>
            </div>
            <div className="file-wrapper">
              <div className="icon"></div>
              <div>
                <div>Header.png</div>
                <div>155 KB</div>
              </div>
            </div>
            <div className="file-wrapper">
              <div className="icon"></div>
              <div>
                <div>Header.png</div>
                <div>155 KB</div>
              </div>
            </div>
          </div>
          <Divider />
        </div>
        <div className="task-wrapper__detail-bottom">
          <div className="title">DESCRIPTION</div>
          <div className="comment">
            <div className="comment__input">
              <div className="avatar"></div>
              <Input style={{ width: 350 }} placeholder="Add a comment ..." />
            </div>
            <div className="comment__list">
              {[...Array(6)].map((_) => (
                <div key={Math.random()} className="comment__item"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
