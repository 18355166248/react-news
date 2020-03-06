import React, { useState, useRef } from "react";
import Example from "./example";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import {
  SortableContainer,
  SortableElement,
  sortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";
import { Table } from "antd";
import styles from "./sortTable.less";

const DragHandle = sortableHandle(() => (
  <span style={{ cursor: "move", color: "red", userSelect: "none" }}>拖拽</span>
));
const SortableItem = SortableElement(({ value }) => {
  return value;
});

const SortableList = SortableContainer(({ items }) => {
  return (
    <tbody class="ant-table-tbody">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </tbody>
  );
});

function SortTable() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Brown",
      age: 17
    },
    {
      id: 2,
      name: "John jiang",
      age: 16
    },
    {
      id: 3,
      name: "lili",
      age: 17
    },
    {
      id: 4,
      name: "说的",
      age: 16
    },
    {
      id: 5,
      name: "测试",
      age: 17
    },
    {
      id: 6,
      name: "蒋老师",
      age: 16
    }
  ]);
  const widthArr = [];

  const sortableItem = useRef(null);

  const columns = [
    {
      dataIndex: "drag",
      key: "drag",
      width: 60,
      render: () => <DragHandle />
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "age",
      dataIndex: "age",
      key: "age"
    }
  ];

  const components = {
    body: {
      wrapper: ({ children }) => {
        return (
          <SortableList
            ref={sortableItem}
            items={children}
            onSortEnd={onSortEnd}
            onSortStart={onSortStart}
            helperClass="sortableHelper"
            useDragHandle
          />
        );
      }
    }
  };

  return (
    <div>
      {/* <DndProvider backend={Backend}>
        <Example />
      </DndProvider> */}
      <div style={{ margin: "50px" }}></div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        components={components}
        rowKey={record => record.id}
      />
    </div>
  );

  function onSortStart() {
    if (sortableItem.current) {
      // 动态给拖拽表格行赋值样式
      const childNodes = [
        ...sortableItem.current.container.firstElementChild.childNodes
      ];

      if (Array.isArray(childNodes) && widthArr.length === 0) {
        childNodes.forEach(child => {
          widthArr.push(child.offsetWidth);
        });

        const sortableHelper = document.getElementsByClassName(
          "sortableHelper"
        )[0];

        const tdArr = [...sortableHelper.childNodes];

        if (Array.isArray(tdArr)) {
          tdArr.forEach((td, i) => {
            td.style.width = widthArr[i] + "px";
          });
        }
      }
    }
  }

  function onSortEnd({ oldIndex, newIndex }) {
    setData(arrayMove(data, oldIndex, newIndex));
  }
}

export default SortTable;
