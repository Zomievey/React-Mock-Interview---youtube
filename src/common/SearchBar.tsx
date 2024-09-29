import React from "react";

interface SearchBarProps {
  searchUser: string;
  setSearchUser: (value: string) => void;
}

export default function SearchBar({
  searchUser,
  setSearchUser,
}: SearchBarProps) {
  return (
    <div>
      <label htmlFor='search'>Search Name: </label>
      <input
        title='search user'
        type='text'
        value={searchUser}
        onChange={(e) => {
          setSearchUser(e.target.value);
        }}
      />
    </div>
  );
}
