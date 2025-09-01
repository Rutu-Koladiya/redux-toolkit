import React, { useRef, useState, useEffect, useMemo } from "react";
import { get } from "lodash";
import { Button } from "reactstrap";

const FixedRow = ({
  rowClassName,
  columns,
  rowIndex,
  page,
  item,
  isExpandable,
  isAllExpanded,
  renderSubRow,
  renderExtraRow,
  isExtraRow,
  perPage,
}) => {
  const ref = useRef();
  const [isExpanded, setIsExpanded] = useState(isAllExpanded);

  useEffect(() => {
    setIsExpanded(isAllExpanded);
  }, [isAllExpanded]);

  const subRow = useMemo(
    () => renderSubRow && renderSubRow(item),
    [item, renderSubRow]
  );

  const extraRow = useMemo(
    () => renderExtraRow && renderExtraRow(item, rowIndex),
    [item, renderExtraRow]
  );

  return (
    <>
      <tr
        className={
          rowClassName +
          " " +
          (columns[0].bgColor ? columns[0].bgColor(item) : "")
        }
      >
        {isExpandable && (
          <td className="py-0">
            {subRow && (
              <Button
                className="d-flex align-items-center p-0 bg-transparent border-0 text-dark"
                onClick={() => setIsExpanded((prev) => !prev)}
                tabIndex="-1"
              >
                <i
                  className={`${
                    isExpanded
                      ? "ri-arrow-down-s-line ri-xl"
                      : "ri-arrow-right-s-line ri-xl"
                  }`}
                />
              </Button>
            )}
          </td>
        )}

        {columns.map((column, index) => (
          <td
            className="py-1 px-2"
            key={column.field || index}
            {...(column.cellProps ?? {})}
          >
            {column.field
              ? get(item, column.field) || "--"
              : column.renderCell &&
                column.renderCell(item, rowIndex, page, perPage, ref)}
          </td>
        ))}
      </tr>
      {isExpanded && subRow && (
        <tr>
          <td colSpan={columns.length + 1} className="p-0">
            {subRow}
          </td>
        </tr>
      )}
      {isExtraRow && extraRow && (
        <tr>
          <td colSpan={columns.length + 1} className="p-0">
            {extraRow}
          </td>
        </tr>
      )}
    </>
  );
};

export default FixedRow;
