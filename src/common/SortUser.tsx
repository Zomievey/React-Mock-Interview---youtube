import React from "react";

interface SortUserProps {
  setSortOption: (value: string) => void;
}

export default function SortUser({ setSortOption }: SortUserProps) {
  return (
    <select
      title='sort user'
      name='sort'
      id='sort'
      onChange={(e) => {
        setSortOption(e.target.value);
      }}
    >
      <option value='nameA'>Name A-Z</option>
      <option value='nameZ'>Name Z-A</option>
      <option value='emailA'>Email A-Z</option>
      <option value='emailZ'>Email Z-A</option>
    </select>
  );
}
